from typing import BinaryIO
import requests
import numpy as np
from tempfile import TemporaryFile

outfile = TemporaryFile()

URL = 'https://www.segye.com'
response = requests.get(URL)
html_data = response.text
import re
temp_data = html_data.split('<li><i class="rank')
nujuk = []   # list에 저장해라
for i in range(1,6):
    if i == 5 :
        temp_data1 = temp_data[i].split('</span></a></li>')
        body = re.search('<span class="txt">.*', temp_data1[0], re.I | re.S)
    else :
        body = re.search('<span class="txt">.*',temp_data[i],re.I|re.S)
    body = body.group()
    body = re.sub('<.+?>', '', body)  # tag 모두 제거
    nujuk.append(body)
# 파일에 저장
np.save('./crawling_segye.npy', nujuk)
loaded_crawling_data = np.load('./crawling_segye.npy')
print(loaded_crawling_data)