const data = {
    district: 'magura',
    division: 'khulna',
    containedSeats: ['91', '92'],
    data: [
        {
            seatNo: '91',
            text: '১',
            transform: 'matrix(1 0 0 1 119.2124 157.1074)',
            points: `76.7,92.2 76.7,90.4 78.5,90.4 78.5,88.7 80.3,88.7 80.3,86.9 82.1,85.1 82.1,79.8 80.3,79.8 
            78.5,79.8 78.5,78 80.3,78 80.3,76.2 80.3,72.7 82.1,72.7 82.1,65.5 83.9,65.5 83.9,60.2 85.6,60.2 85.6,58.5 87.4,58.5 87.4,56.7 
            87.4,53.1 89.2,51.3 89.2,46 90.9,46 90.9,42.5 89.2,42.5 89.2,40.7 90.9,40.7 90.9,38.9 92.7,38.9 92.7,35.3 94.5,35.3 94.5,33.6 
            94.5,35.3 98.1,35.3 98.1,33.6 98.1,30 99.8,30 101.6,28.2 101.6,24.7 103.4,24.7 103.4,22.9 105.2,22.9 105.2,21.1 103.4,21.1 
            103.4,22.9 103.4,21.1 99.8,21.1 99.8,22.9 98.1,22.9 98.1,24.7 96.3,24.7 96.3,22.9 96.3,21.1 98.1,21.1 103.4,21.1 105.2,19.4 
            105.2,17.6 107,15.8 107,14 108.8,14 110.5,14 110.5,12.2 114,12.2 114,10.5 121.2,10.5 121.2,8.7 130,8.7 130,10.5 130,12.2 
            131.8,12.2 131.8,15.8 133.6,15.8 135.4,15.8 135.4,17.6 137.2,17.6 137.2,19.4 138.9,19.4 138.9,21.1 142.5,21.1 142.5,22.9 
            146.1,22.9 146.1,24.7 147.9,24.7 147.9,26.4 147.9,30 146.1,30 146.1,37.1 147.9,37.1 147.9,40.7 149.6,40.7 160.3,40.7 
            160.3,42.5 165.6,42.5 165.6,44.3 171,44.3 171,46 174.5,46 174.5,47.8 176.3,47.8 176.3,49.6 178,49.6 178,51.3 178,56.7 
            176.3,56.7 176.3,62 174.5,62 174.5,63.8 172.7,65.5 172.7,69.2 171,69.2 171,70.9 169.2,70.9 171,72.7 171,74.4 172.7,74.4 
            178,74.4 178,76.2 179.8,76.2 179.8,78 181.6,78 181.6,79.8 183.4,79.8 183.4,81.6 185.2,81.6 185.2,83.4 185.2,85.1 187,85.1 
            187,86.9 188.7,86.9 188.7,94 187,95.8 187,99.3 188.7,101.1 188.7,102.9 190.5,102.9 192.2,104.6 194,104.6 195.8,106.5 
            204.7,106.5 206.5,108.3 208.3,108.3 208.3,110 210.1,111.8 211.8,111.8 211.8,113.5 213.6,113.5 213.6,115.3 215.4,117.1 
            215.4,118.9 213.6,120.7 213.6,122.5 211.8,122.5 211.8,124.2 210.1,124.2 208.3,124.2 208.3,122.5 199.4,122.5 199.4,124.2 
            195.8,124.2 195.8,126 192.2,126 192.2,127.7 190.5,127.7 190.5,129.5 188.7,129.5 188.7,131.3 187,131.3 187,133.1 187,134.9 
            185.2,134.9 185.2,142 183.4,142 183.4,159.8 185.2,159.8 185.2,165.1 187,165.1 187,163.3 188.7,163.3 192.2,163.3 192.2,161.6 
            194,161.6 194,163.3 194,170.4 192.2,170.4 190.5,170.4 190.5,172.2 190.5,174 190.5,172.2 190.5,174 188.7,174 188.7,177.5 
            187,177.5 185.2,177.5 185.2,179.3 185.2,184.7 183.4,184.7 183.4,186.4 181.6,186.4 181.6,190 183.4,190 187,190 185.2,190 
            183.4,190 183.4,191.7 181.6,191.7 181.6,193.5 178,193.5 178,195.3 172.7,195.3 172.7,197.1 167.4,197.1 167.4,198.9 163.8,198.9 
            163.8,200.6 162.1,200.6 162.1,202.4 160.3,202.4 160.3,204.2 156.7,204.2 156.7,205.9 158.5,205.9 158.5,207.7 156.7,207.7 
            158.5,207.7 156.7,207.7 156.7,209.6 158.5,209.6 158.5,211.3 158.5,214.9 160.3,214.9 160.3,222 158.5,222 158.5,227.3 
            156.7,227.3 154.9,227.3 154.9,229.1 154.9,227.3 153.1,227.3 153.1,229.1 153.1,227.3 151.4,227.3 151.4,225.5 149.6,225.5 
            151.4,223.8 151.4,222 149.6,222 149.6,223.8 147.9,223.8 147.9,225.5 146.1,225.5 146.1,223.8 144.3,223.8 137.2,223.8 
            137.2,225.5 135.4,225.5 135.4,227.3 135.4,229.1 133.6,229.1 133.6,223.8 131.8,223.8 133.6,223.8 131.8,223.8 131.8,222 130,222 
            126.5,222 126.5,220.2 115.8,220.2 115.8,222 115.8,223.8 114,223.8 114,230.8 112.3,230.8 112.3,232.6 110.5,232.6 103.4,232.6 
            103.4,234.4 105.2,234.4 103.4,234.4 105.2,234.4 105.2,236.2 94.5,236.2 94.5,234.4 94.5,232.6 96.3,232.6 96.3,227.3 94.5,227.3 
            94.5,225.5 92.7,225.5 92.7,223.8 90.9,223.8 90.9,220.2 89.2,220.2 89.2,213.1 87.4,213.1 87.4,211.3 85.6,211.3 74.9,211.3 
            74.9,209.6 71.4,209.6 71.4,207.7 69.7,207.7 69.7,205.9 67.9,205.9 69.7,205.9 69.7,198.9 67.9,198.9 67.9,195.3 66.1,195.3 
            62.5,195.3 62.5,197.1 60.7,197.1 60.7,195.3 57.2,195.3 57.2,193.5 55.4,193.5 55.4,191.7 53.6,191.7 53.6,190 51.8,190 
            51.8,191.7 48.3,191.7 48.3,193.5 44.8,193.5 46.5,193.5 46.5,188.2 44.8,188.2 44.8,186.4 43,186.4 41.2,186.4 41.2,188.2 
            41.2,186.4 43,186.4 43,184.7 44.8,184.7 46.5,184.7 46.5,182.9 44.8,182.9 46.5,182.9 48.3,182.9 48.3,181.1 50.1,181.1 
            50.1,179.3 48.3,179.3 48.3,177.5 50.1,179.3 51.8,179.3 51.8,177.5 51.8,170.4 50.1,170.4 51.8,170.4 51.8,168.6 53.6,168.6 
            53.6,166.9 55.4,166.9 55.4,165.1 55.4,163.3 53.6,163.3 55.4,163.3 53.6,163.3 55.4,163.3 55.4,161.6 55.4,156.2 53.6,156.2 
            53.6,150.9 53.6,149.1 50.1,149.1 50.1,147.3 48.3,147.3 48.3,145.6 50.1,145.6 50.1,143.8 50.1,142 51.8,142 55.4,142 55.4,140.2 
            57.2,140.2 57.2,138.4 55.4,138.4 55.4,136.7 53.6,136.7 51.8,134.9 53.6,134.9 53.6,133.1 53.6,131.3 55.4,131.3 55.4,129.5 
            53.6,129.5 55.4,129.5 55.4,127.7 53.6,127.7 53.6,126 53.6,124.2 51.8,124.2 53.6,124.2 53.6,122.5 53.6,117.1 55.4,117.1 
            55.4,115.3 53.6,115.3 53.6,113.5 55.4,113.5 59,113.5 59,111.8 59,110 60.7,110 60.7,108.3 59,108.3 59,106.5 60.7,106.5 
            60.7,102.9 62.5,102.9 62.5,101.1 64.3,101.1 64.3,97.6 66.1,97.6 66.1,94 67.9,94 69.7,95.8 69.7,94 71.4,94 73.2,94 73.2,92.2 
            76.7,92.2 `,
        },
        {
            seatNo:'92',
            text: '২',
            transform:'matrix(1 0 0 1 180.9785 256.791)',
            points: `115.8,223.8 115.8,220.2 117.6,220.2 126.5,220.2 126.5,222 131.8,222 131.8,223.8 133.6,223.8 
            131.8,223.8 133.6,223.8 133.6,225.5 133.6,229.1 135.4,229.1 135.4,225.5 137.2,225.5 137.2,223.8 138.9,223.8 142.5,223.8 
            144.3,223.8 146.1,223.8 146.1,225.5 147.9,225.5 147.9,223.8 149.6,223.8 149.6,222 151.4,222 151.4,223.8 149.6,225.5 
            151.4,225.5 151.4,227.3 153.1,227.3 153.1,229.1 153.1,227.3 154.9,227.3 154.9,229.1 154.9,227.3 158.5,227.3 158.5,225.5 
            158.5,222 160.3,222 160.3,214.9 158.5,214.9 158.5,209.6 156.7,209.6 156.7,207.7 158.5,207.7 156.7,207.7 158.5,207.7 
            158.5,205.9 156.7,205.9 156.7,204.2 158.5,204.2 160.3,204.2 160.3,202.4 162.1,202.4 162.1,200.6 163.8,200.6 163.8,198.9 
            167.4,198.9 167.4,197.1 172.7,197.1 172.7,195.3 178,195.3 178,193.5 181.6,193.5 181.6,191.7 183.4,191.7 183.4,190 187,190 
            185.2,190 181.6,190 181.6,188.2 181.6,186.4 183.4,186.4 183.4,184.7 185.2,184.7 185.2,177.5 187,177.5 188.7,177.5 188.7,175.8 
            188.7,174 190.5,174 190.5,172.2 190.5,174 190.5,170.4 192.2,170.4 194,170.4 194,168.6 194,150.9 195.8,150.9 195.8,147.3 
            194,147.3 194,138.4 195.8,138.4 195.8,136.7 197.6,136.7 201.2,136.7 201.2,134.9 208.3,134.9 208.3,136.7 215.4,136.7 
            215.4,138.4 220.7,138.4 220.7,140.2 224.3,140.2 226,142 229.6,142 229.6,143.8 233.1,143.8 233.1,145.6 238.5,145.6 238.5,147.3 
            242,147.3 242,149.1 243.8,149.1 243.8,150.9 247.4,150.9 247.4,152.6 249.2,152.6 249.2,154.4 250.9,154.4 250.9,156.2 
            254.5,156.2 254.5,158 256.2,158 256.2,159.8 258,159.8 258,161.6 259.8,161.6 259.8,163.3 261.6,163.3 261.6,165.1 263.4,165.1 
            263.4,166.9 263.4,211.3 265.1,211.3 265.1,214.9 266.9,216.6 266.9,220.2 268.7,220.2 268.7,223.8 270.4,223.8 270.4,234.4 
            268.7,234.4 268.7,236.2 268.7,234.4 261.6,234.4 261.6,236.2 258,236.2 258,238 259.8,239.8 259.8,241.5 261.6,241.5 261.6,243.3 
            263.4,243.3 263.4,257.5 261.6,257.5 261.6,262.9 259.8,264.6 259.8,266.4 261.6,266.4 261.6,269.9 263.4,269.9 263.4,273.5 
            265.1,273.5 265.1,275.3 266.9,275.3 266.9,278.9 268.7,278.9 268.7,284.2 270.4,284.2 270.4,286 272.3,286 272.3,289.5 
            274.1,289.5 274.1,291.3 275.8,291.3 275.8,293.1 277.6,293.1 279.4,294.8 282.9,294.8 282.9,296.6 288.3,296.6 288.3,298.4 
            290,298.4 288.3,298.4 288.3,300.2 286.5,300.2 282.9,300.2 282.9,298.4 279.4,298.4 279.4,296.6 277.6,296.6 277.6,294.8 
            275.8,294.8 275.8,293.1 274.1,293.1 274.1,291.3 272.3,291.3 272.3,293.1 270.4,293.1 270.4,294.8 270.4,293.1 268.7,293.1 
            268.7,291.3 266.9,291.3 266.9,289.5 265.1,289.5 263.4,289.5 263.4,287.8 261.6,287.8 261.6,286 261.6,280.6 259.8,280.6 
            258,280.6 258,282.4 252.7,282.4 252.7,280.6 243.8,280.6 243.8,278.9 242,278.9 242,280.6 242,282.4 240.3,282.4 229.6,282.4 
            229.6,284.2 229.6,289.5 227.8,289.5 227.8,291.3 226,291.3 218.9,291.3 218.9,293.1 215.4,293.1 215.4,294.8 211.8,294.8 
            211.8,296.6 211.8,300.2 210.1,300.2 210.1,302 208.3,302 208.3,309 206.5,309 206.5,310.8 204.7,310.8 204.7,314.4 202.9,314.4 
            202.9,312.7 201.2,312.7 199.4,312.7 199.4,310.8 199.4,307.3 197.6,307.3 195.8,307.3 195.8,305.5 192.2,305.5 192.2,307.3 
            190.5,307.3 190.5,305.5 188.7,305.5 188.7,303.7 188.7,302 187,302 187,300.2 185.2,300.2 185.2,302 185.2,300.2 179.8,300.2 
            179.8,298.4 176.3,298.4 176.3,296.6 174.5,296.6 174.5,298.4 174.5,300.2 172.7,300.2 172.7,302 174.5,302 174.5,305.5 
            176.3,305.5 176.3,309 174.5,309 172.7,309 172.7,307.3 171,307.3 171,305.5 169.2,305.5 169.2,307.3 165.6,307.3 165.6,309 
            163.8,309 163.8,310.8 163.8,316.2 162.1,316.2 162.1,319.7 163.8,319.7 162.1,319.7 163.8,319.7 163.8,321.5 162.1,321.5 
            160.3,321.5 160.3,323.3 160.3,325.1 158.5,323.3 158.5,330.4 156.7,328.6 151.4,328.6 151.4,326.9 144.3,326.9 144.3,328.6 
            137.2,328.6 137.2,326.9 135.4,326.9 135.4,325.1 135.4,323.3 133.6,323.3 131.8,323.3 131.8,321.5 130,321.5 130,319.7 130,321.5 
            128.3,321.5 126.5,321.5 126.5,319.7 126.5,317.9 124.7,317.9 124.7,316.2 123,316.2 119.4,316.2 119.4,314.4 119.4,312.7 
            117.6,312.7 115.8,312.7 115.8,310.8 114,310.8 114,309 108.8,309 108.8,307.3 107,307.3 107,305.5 103.4,305.5 105.2,305.5 
            105.2,303.7 103.4,303.7 101.6,303.7 101.6,305.5 101.6,300.2 99.8,300.2 99.8,296.6 98.1,294.8 96.3,294.8 96.3,296.6 94.5,296.6 
            94.5,298.4 94.5,300.2 92.7,300.2 92.7,298.4 90.9,298.4 90.9,302 89.2,302 89.2,303.7 87.4,303.7 85.6,305.5 85.6,307.3 
            85.6,305.5 83.9,307.3 83.9,309 82.1,309 80.3,309 78.5,307.3 78.5,305.5 80.3,305.5 80.3,303.7 78.5,303.7 78.5,298.4 76.7,298.4 
            76.7,294.8 74.9,294.8 73.2,294.8 73.2,296.6 67.9,296.6 67.9,298.4 66.1,298.4 66.1,296.6 64.3,296.6 64.3,294.8 64.3,293.1 
            66.1,293.1 66.1,284.2 64.3,284.2 64.3,278.9 62.5,278.9 62.5,277.1 60.7,277.1 59,277.1 59,278.9 57.2,278.9 57.2,280.6 
            57.2,282.4 55.4,282.4 55.4,280.6 53.6,280.6 53.6,278.9 51.8,277.1 53.6,277.1 51.8,277.1 50.1,277.1 50.1,275.3 50.1,273.5 
            48.3,273.5 46.5,273.5 46.5,271.7 44.8,271.7 44.8,269.9 41.2,269.9 41.2,268.2 39.4,268.2 39.4,266.4 37.6,266.4 37.6,264.6 
            37.6,259.3 39.4,259.3 35.9,259.3 35.9,257.5 34.1,257.5 34.1,255.7 30.6,255.7 30.6,254 30.6,248.7 32.3,248.7 34.1,248.7 
            34.1,246.9 32.3,246.9 32.3,245.1 28.7,245.1 28.7,243.3 26.9,243.3 26.9,241.5 21.6,241.5 21.6,243.3 19.9,243.3 19.9,241.5 
            18.1,241.5 16.3,239.8 16.3,238 14.5,238 11,238 11,236.2 12.7,236.2 12.7,234.4 14.5,234.4 14.5,232.6 12.7,232.6 12.7,230.8 
            14.5,230.8 12.7,230.8 12.7,227.3 11,227.3 11,225.5 12.7,225.5 16.3,225.5 16.3,223.8 16.3,220.2 14.5,220.2 14.5,216.6 
            16.3,216.6 21.6,216.6 21.6,214.9 21.6,213.1 19.9,211.3 18.1,211.3 18.1,209.6 19.9,209.6 19.9,207.7 21.6,205.9 21.6,204.2 
            23.4,204.2 25.2,204.2 25.2,202.4 26.9,202.4 28.7,200.6 28.7,198.9 30.6,198.9 25.2,198.9 25.2,197.1 25.2,195.3 23.4,195.3 
            19.9,195.3 19.9,193.5 18.1,193.5 18.1,191.7 18.1,190 19.9,190 26.9,190 26.9,191.7 32.3,191.7 32.3,193.5 32.3,191.7 34.1,191.7 
            35.9,191.7 35.9,190 37.6,190 37.6,191.7 37.6,190 39.4,190 39.4,188.2 41.2,188.2 41.2,186.4 43,186.4 44.8,186.4 44.8,188.2 
            46.5,188.2 46.5,190 46.5,193.5 44.8,193.5 48.3,193.5 48.3,191.7 51.8,191.7 51.8,190 53.6,190 53.6,191.7 55.4,191.7 55.4,193.5 
            57.2,193.5 57.2,195.3 60.7,195.3 60.7,197.1 62.5,197.1 62.5,195.3 67.9,195.3 67.9,197.1 67.9,198.9 69.7,198.9 69.7,205.9 
            67.9,205.9 69.7,205.9 69.7,207.7 71.4,207.7 71.4,209.6 74.9,209.6 74.9,211.3 87.4,211.3 87.4,213.1 89.2,213.1 89.2,214.9 
            89.2,220.2 90.9,220.2 90.9,223.8 92.7,223.8 92.7,225.5 94.5,225.5 94.5,227.3 96.3,227.3 96.3,232.6 94.5,232.6 94.5,236.2 
            96.3,236.2 105.2,236.2 105.2,234.4 103.4,234.4 105.2,234.4 103.4,234.4 103.4,232.6 112.3,232.6 112.3,230.8 114,230.8 114,229.1 
            114,223.8 115.8,223.8 `,
        },
    ]
};

export default data;