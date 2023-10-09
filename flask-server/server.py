import flask
import pickle
import pandas as pd
from flask import jsonify

# Use pickle to load in the trained model.
with open(f'../movie_reviews_sentiment_analysis.pkl', 'rb') as f:
    model = pickle.load(f)

# Use pickle to load in vectorizer.
with open(f'../vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)



app = flask.Flask(__name__)
 
 
@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        return jsonify({'message': 'Welcome to the API'})

    if flask.request.method == 'POST':
        try:
            data_from_frontend = flask.request.get_json()
            content = data_from_frontend['content']
        except KeyError:
            return jsonify({'error': 'Invalid input'})

        # prediction
        prediction = model.predict(vectorizer.transform([content]))

        # return JSON to frontend
        result = {
            'predict_text': "Prediction sentiment for content: ",
            'result': prediction.tolist()
        }

        return jsonify(result)
    
# Running app
if __name__ == '__main__':
    app.run(debug=True)