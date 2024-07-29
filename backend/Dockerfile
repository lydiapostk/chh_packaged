# syntax=docker/dockerfile:1

FROM python:3.8.8

RUN pip install --upgrade pip

# Set up environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Create and set the working directory
WORKDIR /app

# Copy only the requirements file first to leverage Docker caching
COPY requirements.txt .

# Install dependencies
RUN python -m pip install --no-cache-dir -r requirements.txt

# Copy the entire application code
COPY . .

# # Link cplex and docplex; TODO: switch to linux
# RUN python ./../app/cplex/python/3.8/x64_win64/setup.py install

# Expose the port your application will run on
EXPOSE 5000

# Specify the command to run on container start
CMD ["python", "run.py"]