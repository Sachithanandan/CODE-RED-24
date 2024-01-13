from flask import Flask, render_template
import pickle
import numpy as np

app = Flask(_name_)

# Load the machine learning model
with open('your_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Dummy function to make predictions (replace with your actual prediction logic)
def predict_dummy(input_data):
    input_array = np.array(input_data).reshape(1, -1)
    prediction = model.predict(input_array)
    return prediction[0]

@app.route('/')
def index():
    # Dummy input data for demonstration
    dummy_input_data = [5.1, 3.5, 1.4, 0.2]

    # Make a prediction using the dummy function
    prediction = predict_dummy(dummy_input_data)

    return render_template('index.html', prediction=prediction)

if _name_ == '_main_':
    app.run(debug=True)