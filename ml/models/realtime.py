from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup
import json

app = Flask(__name__)

def extract_table_data(url, table_id):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', id=table_id)
    
    if not table:
        return None
    
    headers = [header.text.strip() for header in table.find_all('th')]
    
    if not headers:
        headers = [cell.text.strip() for cell in table.find('tr').find_all(['th', 'td'])]
        rows = table.find_all('tr')[1:]
    else:
        rows = table.find_all('tr')[1:]
    
    data = []
    for row in rows:
        cells = [cell.text.strip() for cell in row.find_all(['th', 'td'])]
        if len(cells) == len(headers):
            data.append(dict(zip(headers, cells)))
    
    return data

@app.route('/extract_table', methods=['GET'])
def extract_table():
    url = "https://www.delhisldc.org/Redirect.aspx?Loc=0804"
    table_id = "Table4"

    table_data = extract_table_data(url, table_id)

    if table_data:
        return jsonify(table_data), 200
    else:
        return jsonify({"error": f"Table with ID '{table_id}' not found."}), 404

if __name__ == '__main__':
    app.run(debug=True)
