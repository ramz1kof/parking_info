while [ : ]
do
    python3 post.py --endpoint adpmjznthen53-ats.iot.us-east-1.amazonaws.com --cert 6bbc8ceae4009cb7e217254ef7a7373f8396907323ec5fac2d648eb8c2fd7f3c-certificate.pem.crt --key 6bbc8ceae4009cb7e217254ef7a7373f8396907323ec5fac2d648eb8c2fd7f3c-private.pem.key --topic data-handler
    sleep 10
done
