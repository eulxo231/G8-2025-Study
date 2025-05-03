from sklearn import datasets
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# Load the Iris dataset
iris = datasets.load_iris()

X = iris.data[:, 2:]  # Petal length and petal width
y = iris.target       # Actual species labels

# Create a KMeans model with 3 clusters
kmeans = KMeans(n_clusters=3, random_state=21)  # Divide into 3 clusters
kmeans.fit(X)  # Train the KMeans model

y_pred = kmeans.labels_  # Cluster labels predicted by the KMeans algorithm

centers = kmeans.cluster_centers_  # Coordinates of cluster centroids

# Create two subplots side by side
fig, axes = plt.subplots(1, 2, figsize=(7, 3))  # Two subplots

# Left plot: actual species labels
axes[0].scatter(X[:, 0], X[:, 1], c=y, cmap='Set1_r', s=10)  # Colored by actual labels
axes[0].set_xlabel('Petal length')  # X-axis label
axes[0].set_ylabel('Petal width')   # Y-axis label
axes[0].set_title('Actual')         # Title: actual labels

# Right plot: predicted cluster labels
axes[1].scatter(X[:, 0], X[:, 1], c=y_pred, cmap='Set1', s=10)  # Colored by KMeans predictions
axes[1].set_xlabel('Petal length')  # X-axis label
axes[1].set_ylabel('Petal width')   # Y-axis label
axes[1].set_title('Predicted')      # Title: predicted by KMeans

# Mark cluster centroids with blue 'x'
axes[1].scatter(centers[:, 0], centers[:, 1], c='blue', marker='x', s=50, label='Centroids')  # Cluster centroids
axes[1].legend()  # Show legend

plt.tight_layout()  # Adjust spacing between plots
plt.show()
