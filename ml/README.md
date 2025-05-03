# AI, Machine Learning (ML), and Deep Learning (DL)

- **AI (Artificial Intelligence):** Includes all technologies that mimic human learning, reasoning, and problem-solving.
- **ML (Machine Learning):** A subset of AI that uses data to learn patterns and make predictions.
- **DL (Deep Learning):** A further subset of ML that uses neural networks to learn automatically from large datasets.

## 🏷️ Part 1: AI Categories

### ✅ Machine Learning vs Deep Learning

| 구분          | 머신러닝 (Machine Learning)                          | 딥러닝 (Deep Learning)                          |
| ------------- | ---------------------------------------------------- | ----------------------------------------------- |
| 정의          | 데이터를 기반으로 학습하는 AI 기법                   | 신경망(Neural Network) 기반의 학습              |
| 특징          | 데이터에서 패턴을 찾아 예측                          | 다층 신경망을 사용하여 자동으로 특징 추출       |
| 데이터 의존성 | ↓ 낮음                                               | ↑ 높음                                          |
| 학습 속도     | 빠름                                                 | 느림                                            |
| 모델 예시     | SVM, 랜덤 포레스트, KNN, 선형 회귀, 로지스틱 회귀 등 | CNN, RNN, LSTM, GAN, Transformer 등             |
| 응용 분야     | 추천 시스템, 질병 예측, 금융 모델링                  | 이미지 인식, 음성 인식, 자율주행, 번역, 생성 AI |

### ✅ Supervised vs Unsupervised Learning

| 구분        | 지도학습 (Supervised Learning)                                          | 비지도학습 (Unsupervised Learning)                 |
| ----------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| 정의        | 정답(라벨)이 있는 데이터를 학습                                         | 정답(라벨) 없이 데이터를 학습                      |
| 목적        | 입력 데이터를 보고 정답을 예측                                          | 데이터의 숨겨진 패턴을 찾음                        |
| 입력 데이터 | (입력값, 정답) 쌍이 존재                                                | 입력값만 존재 (정답 없음)                          |
| 출력 값     | 특정 라벨(분류) 또는 수치 값(회귀) 예측                                 | 그룹(클러스터) 할당 또는 패턴 발견                 |
| 대표 모델   | KNN, SVM, 결정 트리, 랜덤 포레스트, 선형 회귀, 로지스틱 회귀, 신경망 등 | K-Means, DBSCAN, PCA, 군집 분석, 연관 규칙 분석 등 |
| 예시        | 스팸 메일 분류, 손글씨 숫자 인식, 가격 예측                             | 고객 세분화, 이상 탐지, 추천 시스템                |

## 🏷️ Part 2: Libraries

### ✅ Numpy

- 다차원 배열(Matrix)의 빠른 연산

### ✅ Pandas

- 데이터에 대한 표 형식의 표현

### ✅ Matplotlib

- 데이터 그래프 시각화 처리

## 🏷️ Part 3 : Boxplot

![](img/image.png)

### ✅ Terms of boxplot

| Term                          | Description                                                                                                  |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Minimum**                   | Position 1.5 IQR below the first quartile (Q1)                                                               |
| **First Quartile (Q1)**       | Marks the 25% position at the bottom of the box                                                              |
| **Second Quartile (Q2)**      | Median represented by the line inside the box, indicating 50% position                                       |
| **Third Quartile (Q3)**       | Marks the 75% position at the top of the box                                                                 |
| **Maximum**                   | Position 1.5 IQR above the third quartile (Q3)                                                               |
| **Interquartile Range (IQR)** | The range between Q1 and Q3                                                                                  |
| **Whisker**                   | Extends from the box to indicate the range of the data, up to the smallest and largest values within 1.5 IQR |
| **Outlier**                   | Data points beyond the minimum and maximum; if any exist, they are plotted beyond the whiskers               |

### ✅ boxplot sample code

```py
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(10) # numpy random init
data = np.random.randn(50) * 10
data = np.append(data, [50, -40])

plt.boxplot(data)

plt.title("Box Plot with Outliers")
plt.ylabel("Value")
plt.show()
```

## 🏷️ Part 4 : Dataset

| 간단한 실습을 위해 iris 데이터셋 사용

### ✅ iris dataset

| Sepal Length (cm) | Sepal Width (cm) | Petal Length (cm) | Petal Width (cm) | Species |
| ----------------- | ---------------- | ----------------- | ---------------- | ------- |
| 5.1               | 3.5              | 1.4               | 0.2              | setosa  |
| 4.9               | 3.0              | 1.4               | 0.2              | setosa  |
| 4.7               | 3.2              | 1.3               | 0.2              | setosa  |
| 4.6               | 3.1              | 1.5               | 0.2              | setosa  |
| 5.0               | 3.6              | 1.4               | 0.2              | set     |

## 🏷️ Part 5 : ML

### ✅ Classification : KNN

#### ⚙️ sample code

```py
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
```

**output**

```
KNN 정확도: 1.0000
예측된 품종: setosa
```

#### ⚙️ Summary of KNN

K-Nearest Neighbors (KNN) is a simple and widely used machine learning algorithm. It classifies new data points based on the labels of the K closest data points.

#### ⚙️ How KNN Works

1. When a new data point is given, find the K nearest data points in the existing dataset.

2. Determine the most common class (species) among those K points.

3. Assign the new data point to that class.

### ✅ Clustering : K-means

![](img/image-2.png)

#### ⚙️ sample code

```py
from sklearn import datasets
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

iris = datasets.load_iris()

X = iris.data[:, 2:]  # Petal length and petal width
y = iris.target  # Actual species labels

kmeans = KMeans(n_clusters=3, random_state=21)  # n_clusters=3 means dividing into 3 clusters
kmeans.fit(X)  # Learn the KMeans model

y_pred = kmeans.labels_  # Cluster labels predicted by KMeans

centers = kmeans.cluster_centers_  # Cluster centroids

fig, axes = plt.subplots(1, 2, figsize=(7, 3))  # Two subplots side by side

axes[0].scatter(X[:, 0], X[:, 1], c=y, cmap='Set1_r', s=10)  # Color by actual labels
axes[0].set_xlabel('Petal length')  # x-axis label
axes[0].set_ylabel('Petal width')  # y-axis label
axes[0].set_title('Actual')  # Title: actual species

axes[1].scatter(X[:, 0], X[:, 1], c=y_pred, cmap='Set1', s=10) # Color by KMeans predictions
axes[1].set_xlabel('Petal length')  # x-axis label
axes[1].set_ylabel('Petal width')  # y-axis label
axes[1].set_title('Predicted')  # Title: predicted clusters for KMeans

axes[1].scatter(centers[:, 0], centers[:, 1], c='blue', marker='x', s=50, label='Centroids')  # Mark centroids
axes[1].legend()  # Show legend

plt.tight_layout()  # Adjust spacing between plots
plt.show() # Display the plots
```

#### ⚙️ Summary of K-means

#### ⚙️ How K-means Works

1. 주어진 데이터셋에서 K개의 군집을 찾는 알고리즘.

2. 처음 K개의 중심점을 랜덤으로 선택하고, 각 데이터 포인트를 가장 가까운 중심점에 할당.

3. 각 군집에 속하는 데이터 포인트들의 평균을 계산하여 새로운 중심점을 갱신.

4. 군집 중심점이 더 이상 변하지 않거나 일정 기준을 만족할 때까지 2단계와 3단계를 반복.

### ✅ Prediction : Linear Regression

![](img/image-1.png)

#### ⚙️ sample code

```py
import yfinance as yf
import pandas as pd

stock_data = yf.download('AAPL', start='2020-01-01', end='2025-01-01') #Apple from 2020-1-1 to 2025-1-1
stock_data.head()

import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Convert the date to number (treat dates as ordinal numbers)
stock_data['Date'] = stock_data.index
stock_data['Date'] = stock_data['Date'].map(pd.Timestamp.toordinal)

# Prepare closing prices and date values
X = stock_data['Date'].values.reshape(-1, 1)  # Independent variable: date
y = stock_data['Close'].values  # Dependent variable: closing price

# Train linear regression model
model = LinearRegression()
model.fit(X, y)

# Create future dates to predict (example: up to 7 years from 2020)
future_dates = pd.date_range(start='2020-01-01', periods=365*7, freq='D')
future_dates_ordinal = future_dates.map(pd.Timestamp.toordinal).values.reshape(-1, 1)

# Results from predictiosn
predictions = model.predict(future_dates_ordinal)

# Visualized prices vs predicted prices
plt.figure(figsize=(10, 6))
plt.plot(stock_data.index, stock_data['Close'], label='Actual', color='blue')  # 실제 종가
plt.plot(future_dates, predictions, label='Predicted', color='red')  # 예측 종가
plt.xlabel('Date')
plt.ylabel('Close Price')
plt.title('Stock Price Prediction using Linear Regression')
plt.legend()
plt.grid(True)
plt.show()
```

#### ⚙️ Summary of Linear Regression

- 주어진 데이터를 설명하기 가장 적합한 직선의 방정식을 찾아 데이터를 설명하거나 예측
