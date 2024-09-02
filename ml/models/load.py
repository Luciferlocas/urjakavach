import requests
from bs4 import BeautifulSoup
import json

def extract_loaddata(url, table_id):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', id=table_id)
    
    if not table:
        return None
    
    data = []
    rows = table.find_all('tr')
    
    for row in rows[1:]: 
        cells = row.find_all('td')
        if len(cells) >= 2:
            time = cells[0].text.strip()
            load = cells[1].text.strip()
            data.append({"Time": time, "Load (MW)": load})
    
    return data

url = "https://www.delhisldc.org/Loaddata.aspx?mode=01/09/2024"

table_data = extract_loaddata(url, table_id="ContentPlaceHolder3_DGGridAv")

if table_data:
    json_data = json.dumps(table_data, indent=2)
    
    print(json_data)
else:
    print("Table with ID 'ContentPlaceHolder3_DGGridAv' not found or does not have the expected structure.")