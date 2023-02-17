import json
from flask import Flask, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors

app = Flask(__name__)

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password123'
app.config['MYSQL_DB'] = 'flaskdatabase'
mysql = MySQL(app)
@app.route('/api',methods = ["GET"])

# def todo_serializer(todo):
#     return {
#         'id':todo.id,
#         'content':todo.content
#     }

def index():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    query = "SELECT * FROM TODO"
    cursor.execute(query)
    result = cursor.fetchall()
    # data = json.loads(result)
    return jsonify(result)
    return {
        'name':result
    }

if __name__ == '__main__':
    app.run(debug=True)