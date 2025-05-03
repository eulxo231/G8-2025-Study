import yfinance as yf
import pandas as pd

# Download Apple stock data from Jan 1, 2020 to Jan 1, 2025
stock_data = yf.download('AAPL', start='2020-01-01', end='2025-01-01')
stock_data.head()

import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Convert dates to numeric format (treat dates as ordinal numbers)
stock_data['Date'] = stock_data.index
stock_data['Date'] = stock_data['Date'].map(pd.Timestamp.toordinal)

# Prepare data for regression: closing price and date
X = stock_data['Date'].values.reshape(-1, 1)  # Independent variable: date
y = stock_data['Close'].values                # Dependent variable: closing price

# Train linear regression model
model = LinearRegression()
model.fit(X, y)

# Generate future dates (example: up to ~7 years from start)
future_dates = pd.date_range(start='2020-01-01', periods=365*7, freq='D')
future_dates_ordinal = future_dates.map(pd.Timestamp.toordinal).values.reshape(-1, 1)

# Make predictions
predictions = model.predict(future_dates_ordinal)

# Visualize actual vs predicted prices
plt.figure(figsize=(10, 6))
plt.plot(stock_data.index, stock_data['Close'], label='Actual', color='blue')     # Actual closing prices
plt.plot(future_dates, predictions, label='Predicted', color='red')               # Predicted prices
plt.xlabel('Date')
plt.ylabel('Close Price')
plt.title('Stock Price Prediction using Linear Regression')
plt.legend()
plt.grid(True)
plt.show()
