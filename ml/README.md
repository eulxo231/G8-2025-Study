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

다차원 배열(Matrix)의 빠른 연산

### ✅ Pandas

데이터에 대한 표 형식의 표현

### ✅ Matplotlib

데이터 그래프 시각화 처리

## 🏷️ Part 3 : Boxplot

# 📦 Boxplot Interpretation

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
