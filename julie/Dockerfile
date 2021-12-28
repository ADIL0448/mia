FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ADIL0448/miabot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/ADIL0448/miabot

CMD ["node", "bot.js"]
