import yfinance as yf
import pandas as pd

stock_data = yf.download('AAPL', start='2020-01-01', end='2025-01-01') # 애플
stock_data.head()

import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# 날짜를 숫자로 변환 (단순히 날짜를 '일'로 처리)
stock_data['Date'] = stock_data.index
stock_data['Date'] = stock_data['Date'].map(pd.Timestamp.toordinal)

# 종가와 날짜 데이터 준비
X = stock_data['Date'].values.reshape(-1, 1)  # 독립 변수: 날짜
y = stock_data['Close'].values  # 종속 변수: 종가

# 선형 회귀 모델 학습
model = LinearRegression()
model.fit(X, y)

# 예측할 미래 날짜 생성 (예시로 2023년 12월 31일까지)
future_dates = pd.date_range(start='2020-01-01', periods=365*7, freq='D')
future_dates_ordinal = future_dates.map(pd.Timestamp.toordinal).values.reshape(-1, 1)

# 예측 결과
predictions = model.predict(future_dates_ordinal)

# 예측된 값과 실제 값을 비교하기 위한 시각화
plt.figure(figsize=(10, 6))
plt.plot(stock_data.index, stock_data['Close'], label='Actual', color='blue')  # 실제 종가
plt.plot(future_dates, predictions, label='Predicted', color='red')  # 예측 종가
plt.xlabel('Date')
plt.ylabel('Close Price')
plt.title('Stock Price Prediction using Linear Regression')
plt.legend()
plt.grid(True)
plt.show()