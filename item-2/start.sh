while [ : ]
do
    python3 post.py --endpoint adpmjznthen53-ats.iot.us-east-1.amazonaws.com --cert 802f45cce1a2e802ab08efb616e955e35da38408a76ddd21eefb545642b1bf62-certificate.pem.crt --key 802f45cce1a2e802ab08efb616e955e35da38408a76ddd21eefb545642b1bf62-private.pem.key --topic data-handler
    sleep 10
done
