import tensorflow as tf
import numpy as np
# 샘플 이미지 생성 (5x5 이미지)
image = np.array([[1, 2, 3, 4, 5],
 [6, 7, 8, 9, 10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20],
 [21, 22, 23, 24, 25]], dtype=np.float32).reshape(1, 5, 5, 1)
# 3x3 필터 생성
kernel = np.array([[0, 1, 0],
 [1, -4, 1],
 [0, 1, 0]], dtype=np.float32).reshape(3, 3, 1, 1)


conv_layer = tf.nn.conv2d(image, kernel, strides=[1, 1, 1, 1], padding="VALID")
print(conv_layer.numpy().squeeze())