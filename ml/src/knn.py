import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# 1 아이리스 데이터 로드
iris = load_iris() # 150개
X = iris.data # 특징 데이터 (꽃받침, 꽃잎의 길이와 너비)
y = iris.target # 품종 (0: Setosa, 1: Versicolor, 2: Virginica)

# 2 데이터 분할 (훈련 데이터 80%, 테스트 데이터 20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3 데이터 스케일링 (KNN은 거리 기반 알고리즘이므로 정규화 필수)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# 4 KNN 모델 학습 (K=5)
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)

# 5 예측 및 평가
y_pred = knn.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"KNN 정확도: {accuracy:.4f}")

# 6 샘플 데이터 예측 (새로운 붓꽃 데이터 입력)
new_sample = np.array([[5.1, 3.5, 1.4, 0.2]]) # Setosa와 유사한 데이터
new_sample_scaled = scaler.transform(new_sample)
predicted_class = knn.predict(new_sample_scaled)
print(f"예측된 품종: {iris.target_names[predicted_class][0]}")