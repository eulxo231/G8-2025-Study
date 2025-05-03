import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# 1. Load the Iris dataset (150 samples)
iris = load_iris()  # 150 samples
X = iris.data  # Feature data (sepal length/width, petal length/width)
y = iris.target  # Species labels (0: Setosa, 1: Versicolor, 2: Virginica)

# 2. Split data (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Data scaling (KNN is distance-based, so normalization is essential)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# 4. Train KNN model (K=5)
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)

# 5. Prediction and evaluation
y_pred = knn.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"KNN Accuracy: {accuracy:.4f}")

# 6. Predict sample data (new iris input)
new_sample = np.array([[5.1, 3.5, 1.4, 0.2]])  # Data similar to Setosa
new_sample_scaled = scaler.transform(new_sample)
predicted_class = knn.predict(new_sample_scaled)
print(f"Predicted species: {iris.target_names[predicted_class][0]}")
