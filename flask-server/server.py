import flask
import pickle
import pandas as pd

# Use pickle to load in the spre-trained model.
with open(f'../movie_reviews_sentiment_analysis.pkl', 'rb') as f:
    model = pickle.load(f)

# Use pickle to load in vectorizer.
with open(f'../vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)



app = flask.Flask(__name__)
 
 
@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        return flask.render_template('./index.html')

    if flask.request.method == 'POST':
        # 從前端的 JSON 數據中獲取 review 和 movie
        data_from_frontend = flask.request.get_json()
        review = data_from_frontend.get('review', '')

        # 執行預測
        prediction = model.predict(vectorizer.transform([review]))

        # 返回 JSON 數據給前端
        result = {
            'predict_text': "Prediction sentiment for movie: ",
            'result': prediction.tolist()  # 將 NumPy array 轉換為 Python list
        }

        return result
# Running app
if __name__ == '__main__':
    app.run(debug=True)