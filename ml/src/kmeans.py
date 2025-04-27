from sklearn import datasets
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

iris = datasets.load_iris()

X = iris.data[:, 2:]  # 꽃잎 길이와 꽃잎 너비
y = iris.target  # 실제 품종 정보

kmeans = KMeans(n_clusters=3, random_state=21)  # n_clusters=3은 3개의 군집으로 분할
kmeans.fit(X)  # KMeans 모델 학습

y_pred = kmeans.labels_  # KMeans 알고리즘이 예측한 클러스터 레이블

centers = kmeans.cluster_centers_  # 군집 중심점

fig, axes = plt.subplots(1, 2, figsize=(7, 3))  # 두 개의 서브 플롯

axes[0].scatter(X[:, 0], X[:, 1], c=y, cmap='Set1_r', s=10)  # 실제 품종 레이블에 따른 색상
axes[0].set_xlabel('Petal length')  # x축 라벨
axes[0].set_ylabel('Petal width')  # y축 라벨
axes[0].set_title('Actual')  # 제목: 실제 값

axes[1].scatter(X[:, 0], X[:, 1], c=y_pred, cmap='Set1', s=10)  # KMeans 예측값에 따른 색상
axes[1].set_xlabel('Petal length')  # x축 라벨
axes[1].set_ylabel('Petal width')  # y축 라벨
axes[1].set_title('Predicted')  # 제목: KMeans 예측 값

axes[1].scatter(centers[:, 0], centers[:, 1], c='blue', marker='x', s=50, label='Centroids')  # 군집 중심점
axes[1].legend()  # 범례 표시

plt.tight_layout()  # 그래프 간격 조정
plt.show()