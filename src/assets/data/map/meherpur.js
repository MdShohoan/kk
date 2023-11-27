const data = {
    district: 'meherpur',
    division: 'khulna',
    containedSeats: ['73', '74'],
    data: [
        {
            seatNo: '73',
            text: '১',
            transform: 'matrix(1 0 0 1 186.7947 128.5109)',
            points: `106.3,110.8 106.3,108.6 104.1,108.6 104.1,102.1 102,102.1 104.1,102.1 104.1,99.9 110.7,99.9 
            110.7,97.7 115.1,97.7 115.1,95.5 119.4,95.5 119.4,93.4 121.6,93.4 121.6,91.2 121.6,89 123.7,86.8 123.7,82.5 125.9,82.5 
            130.2,82.5 130.2,84.7 134.6,84.7 134.6,82.5 136.8,82.5 136.8,84.7 139,84.7 139,82.5 136.8,82.5 139,82.5 136.8,82.5 136.8,80.4 
            136.8,82.5 134.6,82.5 134.6,78.2 136.8,78.2 139,76 136.8,76 136.8,78.2 134.6,78.2 134.6,76 136.8,76 134.6,76 134.6,71.6 
            136.8,71.6 139,71.6 139,69.4 141.2,69.4 145.5,71.6 147.7,71.6 147.7,69.4 154.2,69.4 154.2,71.6 160.7,71.6 160.7,73.8 
            162.9,73.8 162.9,71.6 165.1,71.6 165.1,69.4 165.1,67.3 162.9,65.1 162.9,62.9 165.1,62.9 165.1,56.4 167.3,56.4 165.1,56.4 
            165.1,54.3 165.1,52.1 165.1,54.3 169.4,54.3 169.4,56.4 169.4,54.3 171.6,54.3 171.6,56.4 171.6,54.3 171.6,52.1 169.4,52.1 
            169.4,43.3 167.3,43.3 167.3,39 169.4,39 167.3,39 167.3,36.8 171.6,36.8 171.6,34.7 167.3,34.7 167.3,32.5 165.1,32.5 165.1,30.3 
            162.9,30.3 165.1,30.3 165.1,28.2 162.9,28.2 165.1,28.2 162.9,28.2 162.9,26 165.1,26 171.6,26 171.6,23.8 175.9,23.8 175.9,21.7 
            180.3,21.7 180.3,19.5 191.2,19.5 191.2,21.7 191.2,28.2 193.4,28.2 193.4,34.7 195.5,34.7 195.5,36.8 197.7,36.8 197.7,39 
            199.9,39 204.2,39 204.2,36.8 204.2,21.7 206.3,21.7 206.3,19.5 208.5,19.5 208.5,17.2 210.7,17.2 210.7,15.1 212.9,15.1 
            212.9,12.9 215,12.9 221.6,12.9 221.6,15.1 223.8,15.1 223.8,17.2 225.9,17.2 225.9,19.5 228.1,19.5 228.1,21.7 228.1,26 230.3,26 
            230.3,36.8 228.1,36.8 228.1,39 230.3,39 228.1,39 230.3,39 230.3,54.3 232.4,54.3 232.4,58.6 234.6,58.6 236.8,58.6 236.8,56.4 
            238.9,56.4 238.9,54.3 241.1,54.3 241.1,52.1 241.1,49.9 243.3,49.9 247.7,49.9 247.7,47.7 247.7,49.9 249.9,49.9 256.4,49.9 
            256.4,52.1 260.7,52.1 260.7,54.3 262.9,54.3 262.9,56.4 265,56.4 267.2,58.6 269.4,60.8 269.4,62.9 271.6,62.9 273.8,62.9 
            273.8,65.1 273.8,67.3 276,67.3 276,69.4 278.1,69.4 278.1,73.8 280.3,73.8 280.3,80.4 282.5,80.4 282.5,91.2 280.3,91.2 
            280.3,95.5 278.1,95.5 276,95.5 276,97.7 273.8,97.7 273.8,99.9 269.4,99.9 269.4,102.1 262.9,102.1 262.9,99.9 249.9,99.9 
            249.9,102.1 249.9,104.3 252,104.3 252,106.4 254.2,106.4 254.2,108.6 256.4,108.6 256.4,110.8 258.5,110.8 260.7,110.8 260.7,113 
            265,113 265,110.8 267.2,110.8 269.4,108.6 271.6,108.6 271.6,106.4 276,106.4 276,104.3 286.8,104.3 286.8,106.4 289,106.4 
            289,108.6 289,115.1 286.8,115.1 286.8,117.3 284.6,119.4 282.5,121.6 280.3,121.6 280.3,123.8 276,123.8 276,125.9 273.8,125.9 
            273.8,128.1 271.6,128.1 271.6,130.3 271.6,134.7 269.4,134.7 269.4,143.4 267.2,143.4 267.2,147.7 265,147.7 258.5,147.7 
            258.5,149.9 256.4,149.9 256.4,152 256.4,156.4 254.2,156.4 254.2,158.6 252,160.8 247.7,160.8 247.7,163 247.7,165.1 245.5,165.1 
            245.5,173.8 243.3,173.8 243.3,178.1 241.1,178.1 241.1,182.5 238.9,182.5 238.9,189.1 236.8,189.1 236.8,197.7 234.6,199.9 
            234.6,204.2 232.4,204.2 230.3,202.1 228.1,202.1 228.1,204.2 221.6,204.2 221.6,206.4 215,206.4 215,204.2 212.9,204.2 
            212.9,202.1 212.9,204.2 210.7,204.2 210.7,208.6 208.5,208.6 208.5,217.3 206.3,217.3 206.3,234.7 204.2,234.7 202,234.7 
            202,236.8 197.7,236.8 197.7,234.7 197.7,232.5 195.5,234.7 195.5,232.5 195.5,234.7 193.4,234.7 193.4,232.5 193.4,234.7 
            191.2,234.7 188.9,234.7 188.9,236.8 184.6,236.8 184.6,234.7 184.6,228.2 182.4,228.2 182.4,226 180.3,226 178.1,226 178.1,228.2 
            178.1,226 178.1,228.2 171.6,228.2 171.6,226 171.6,228.2 169.4,228.2 169.4,226 169.4,228.2 169.4,221.7 167.3,221.7 167.3,219.5 
            165.1,219.5 162.9,219.5 162.9,221.7 154.2,221.7 154.2,219.5 154.2,217.3 152,217.3 149.8,217.3 149.8,215.2 143.3,215.2 
            143.3,212.9 141.2,212.9 141.2,215.2 139,215.2 139,212.9 136.8,212.9 136.8,215.2 134.6,215.2 136.8,212.9 136.8,208.6 139,208.6 
            136.8,208.6 136.8,206.4 136.8,204.2 134.6,204.2 134.6,202.1 136.8,202.1 136.8,197.7 134.6,197.7 134.6,193.4 136.8,191.2 
            136.8,189.1 134.6,189.1 132.4,189.1 130.2,186.9 128.1,186.9 128.1,184.7 128.1,182.5 130.2,182.5 130.2,173.8 128.1,173.8 
            128.1,169.5 128.1,171.6 132.4,171.6 132.4,169.5 134.6,169.5 134.6,167.3 136.8,167.3 136.8,165.1 136.8,160.8 134.6,160.8 
            134.6,156.4 132.4,156.4 132.4,154.2 134.6,154.2 134.6,147.7 132.4,147.7 132.4,145.5 130.2,145.5 130.2,141.2 128.1,141.2 
            128.1,139 128.1,141.2 128.1,139 130.2,139 132.4,139 132.4,136.9 132.4,134.7 130.2,134.7 130.2,132.5 128.1,132.5 128.1,130.3 
            130.2,130.3 128.1,130.3 128.1,128.1 130.2,128.1 130.2,125.9 128.1,125.9 125.9,125.9 125.9,128.1 121.6,128.1 121.6,125.9 
            112.9,125.9 112.9,123.8 112.9,125.9 110.7,125.9 110.7,128.1 108.5,128.1 106.3,128.1 108.5,128.1 108.5,130.3 110.7,130.3 
            112.9,130.3 112.9,132.5 110.7,132.5 110.7,130.3 110.7,132.5 108.5,132.5 108.5,134.7 110.7,134.7 110.7,136.9 112.9,136.9 
            112.9,139 110.7,139 108.5,139 108.5,136.9 104.1,136.9 104.1,139 102,139 104.1,139 104.1,141.2 102,141.2 102,143.4 99.8,143.4 
            99.8,139 97.6,139 97.6,141.2 95.5,141.2 91.1,141.2 91.1,139 86.8,139 86.8,136.9 89,136.9 89,134.7 89,132.5 91.1,132.5 
            91.1,119.4 89,119.4 89,115.1 86.8,115.1 86.8,113 84.6,113 86.8,113 86.8,110.8 89,110.8 89,113 91.1,113 91.1,115.1 93.3,115.1 
            95.5,113 95.5,115.1 93.3,115.1 95.5,115.1 95.5,113 99.8,113 102,110.8 106.3,110.8 106.3,113 106.3,110.8 `,
        },
        {
            seatNo:'74',
            text: '২',
            transform:'matrix(1 0 0 1 84.6102 243.3137)',
            points: `62.9,106.4 62.9,104.3 65,104.3 67.2,104.3 67.2,106.4 69.4,106.4 71.5,108.6 69.4,108.6 69.4,110.8 
            69.4,115.1 71.5,115.1 75.9,115.1 75.9,113 78.1,113 80.3,110.8 82.5,110.8 84.6,113 86.8,113 86.8,115.1 89,115.1 89,117.3 
            89,119.4 91.1,119.4 91.1,125.9 91.1,128.1 91.1,132.5 89,132.5 89,136.9 86.8,136.9 86.8,139 89,139 91.1,139 91.1,141.2 
            97.6,141.2 97.6,139 99.8,139 99.8,141.2 99.8,143.4 102,143.4 102,141.2 104.1,141.2 104.1,139 102,139 104.1,139 104.1,136.9 
            108.5,136.9 108.5,139 112.9,139 112.9,136.9 110.7,136.9 110.7,134.7 108.5,134.7 108.5,132.5 110.7,132.5 110.7,130.3 
            110.7,132.5 112.9,132.5 112.9,130.3 110.7,130.3 108.5,130.3 108.5,128.1 106.3,128.1 108.5,128.1 110.7,128.1 110.7,125.9 
            112.9,125.9 112.9,123.8 112.9,125.9 115.1,125.9 121.6,125.9 121.6,128.1 125.9,128.1 125.9,125.9 130.2,125.9 130.2,128.1 
            128.1,128.1 128.1,130.3 130.2,130.3 128.1,130.3 128.1,132.5 130.2,132.5 130.2,134.7 132.4,134.7 132.4,139 130.2,139 128.1,139 
            128.1,141.2 128.1,139 128.1,141.2 130.2,141.2 130.2,143.4 130.2,145.5 132.4,145.5 132.4,147.7 134.6,147.7 134.6,154.2 
            132.4,154.2 132.4,156.4 134.6,156.4 134.6,160.8 136.8,160.8 136.8,167.3 134.6,167.3 134.6,169.5 132.4,169.5 132.4,171.6 
            130.2,171.6 128.1,171.6 128.1,169.5 128.1,173.8 130.2,173.8 130.2,182.5 128.1,182.5 128.1,186.9 130.2,186.9 132.4,189.1 
            136.8,189.1 136.8,191.2 134.6,193.4 134.6,197.7 136.8,197.7 136.8,202.1 134.6,202.1 134.6,204.2 136.8,204.2 136.8,208.6 
            139,208.6 136.8,208.6 136.8,210.7 136.8,212.9 134.6,215.2 136.8,215.2 136.8,212.9 139,212.9 139,215.2 141.2,215.2 141.2,212.9 
            143.3,212.9 143.3,215.2 149.8,215.2 149.8,217.3 154.2,217.3 154.2,219.5 154.2,221.7 156.3,221.7 162.9,221.7 162.9,219.5 
            167.3,219.5 167.3,221.7 169.4,221.7 169.4,223.8 169.4,228.2 169.4,226 169.4,228.2 171.6,228.2 171.6,226 171.6,228.2 
            178.1,228.2 178.1,226 178.1,228.2 178.1,226 182.4,226 182.4,228.2 184.6,228.2 184.6,230.3 184.6,236.8 186.8,236.8 188.9,236.8 
            188.9,234.7 193.4,234.7 193.4,232.5 193.4,234.7 195.5,234.7 195.5,232.5 195.5,234.7 197.7,232.5 197.7,236.8 199.9,236.8 
            202,236.8 202,239 199.9,239 199.9,241.2 199.9,243.4 202,243.4 202,245.6 199.9,245.6 199.9,249.9 202,249.9 204.2,249.9 
            204.2,252.1 204.2,256.4 202,256.4 202,262.9 199.9,262.9 199.9,265.1 197.7,265.1 197.7,267.3 195.5,267.3 195.5,271.7 
            193.4,271.7 188.9,271.7 188.9,273.9 173.8,273.9 171.6,276 171.6,278.2 169.4,278.2 169.4,280.4 167.3,280.4 167.3,282.5 
            165.1,282.5 165.1,284.7 162.9,284.7 160.7,284.7 160.7,286.9 158.5,286.9 158.5,289 156.3,289 156.3,291.2 149.8,291.2 
            149.8,293.4 147.7,293.4 147.7,295.5 143.3,295.5 143.3,297.8 139,297.8 139,300 132.4,300 132.4,302.1 130.2,302.1 130.2,304.3 
            130.2,306.4 128.1,306.4 128.1,308.6 125.9,308.6 125.9,310.8 128.1,310.8 125.9,310.8 125.9,312.9 125.9,310.8 123.7,310.8 
            123.7,308.6 121.6,308.6 121.6,306.4 121.6,308.6 119.4,308.6 119.4,310.8 119.4,312.9 117.2,312.9 117.2,317.3 115.1,317.3 
            110.7,317.3 110.7,319.4 110.7,317.3 108.5,317.3 106.3,317.3 106.3,319.4 102,319.4 102,317.3 97.6,317.3 97.6,315.1 93.3,315.1 
            93.3,317.3 93.3,319.4 91.1,319.4 91.1,321.6 89,321.6 89,323.8 86.8,323.8 86.8,326 84.6,326 89,326 89,328.2 86.8,328.2 
            86.8,330.4 84.6,330.4 84.6,332.5 84.6,334.7 84.6,332.5 82.5,332.5 82.5,334.7 82.5,339 84.6,339 86.8,339 86.8,341.2 89,341.2 
            86.8,341.2 86.8,343.4 84.6,343.4 84.6,345.5 82.5,345.5 80.3,345.5 80.3,347.7 78.1,347.7 78.1,345.5 78.1,347.7 75.9,347.7 
            75.9,349.9 78.1,349.9 78.1,356.5 75.9,354.3 69.4,354.3 69.4,356.5 65,356.5 65,358.6 62.9,360.8 58.5,360.8 58.5,358.6 
            56.4,360.8 54.2,360.8 54.2,363 54.2,360.8 52,360.8 52,363 52,360.8 52,363 49.8,363 49.8,360.8 52,360.8 52,358.6 52,360.8 
            52,358.6 52,360.8 54.2,360.8 54.2,358.6 54.2,356.5 52,356.5 52,358.6 52,356.5 47.6,356.5 47.6,354.3 52,354.3 52,352.1 
            49.8,352.1 49.8,354.3 47.6,354.3 45.5,356.5 43.3,356.5 43.3,358.6 43.3,360.8 41.1,360.8 41.1,358.6 38.9,358.6 28.1,358.6 
            28.1,356.5 30.3,356.5 30.3,354.3 30.3,352.1 32.4,352.1 32.4,347.7 34.6,347.7 38.9,347.7 38.9,345.5 41.1,345.5 41.1,343.4 
            41.1,341.2 38.9,341.2 38.9,339 41.1,339 41.1,336.9 38.9,336.9 41.1,336.9 41.1,334.7 41.1,323.8 38.9,323.8 36.8,323.8 36.8,326 
            23.7,326 21.5,328.2 15,328.2 15,326 15,317.3 12.9,317.3 12.9,315.1 10.7,315.1 10.7,312.9 12.9,312.9 12.9,310.8 15,310.8 
            15,308.6 17.2,308.6 19.3,308.6 19.3,306.4 21.5,306.4 21.5,304.3 21.5,300 23.7,300 23.7,291.2 25.9,291.2 25.9,286.9 23.7,286.9 
            23.7,282.5 21.5,282.5 19.3,280.4 19.3,260.8 17.2,260.8 17.2,254.3 19.3,254.3 19.3,249.9 21.5,249.9 21.5,245.6 19.3,245.6 
            19.3,243.4 21.5,243.4 21.5,241.2 23.7,241.2 25.9,241.2 25.9,239 25.9,236.8 28.1,236.8 28.1,234.7 25.9,234.7 25.9,232.5 
            25.9,234.7 25.9,236.8 23.7,236.8 23.7,232.5 25.9,232.5 25.9,228.2 23.7,228.2 25.9,228.2 23.7,226 23.7,223.8 23.7,226 
            21.5,223.8 23.7,223.8 23.7,221.7 25.9,221.7 25.9,219.5 25.9,217.3 28.1,217.3 28.1,215.2 30.3,215.2 30.3,197.7 28.1,197.7 
            28.1,199.9 25.9,199.9 25.9,197.7 25.9,199.9 25.9,197.7 23.7,199.9 23.7,197.7 21.5,197.7 17.2,197.7 17.2,195.6 15,195.6 
            15,193.4 12.9,193.4 12.9,191.2 12.9,189.1 12.9,191.2 10.7,191.2 10.7,189.1 19.3,189.1 19.3,191.2 25.9,191.2 25.9,189.1 
            28.1,189.1 30.3,186.9 32.4,186.9 32.4,184.7 32.4,178.1 34.6,178.1 41.1,178.1 41.1,176 41.1,171.6 43.3,171.6 45.5,171.6 
            45.5,169.5 41.1,169.5 38.9,167.3 36.8,167.3 36.8,165.1 38.9,165.1 38.9,163 36.8,163 36.8,165.1 36.8,163 36.8,165.1 34.6,165.1 
            34.6,163 38.9,163 38.9,165.1 43.3,165.1 43.3,167.3 43.3,165.1 45.5,165.1 47.6,165.1 47.6,163 49.8,163 49.8,160.8 49.8,156.4 
            47.6,156.4 47.6,154.2 45.5,154.2 43.3,154.2 43.3,152 41.1,152 38.9,149.9 36.8,149.9 36.8,147.7 36.8,132.5 38.9,132.5 
            38.9,130.3 41.1,130.3 41.1,125.9 38.9,125.9 38.9,123.8 36.8,123.8 34.6,123.8 34.6,125.9 32.4,125.9 32.4,128.1 28.1,128.1 
            28.1,125.9 30.3,125.9 28.1,125.9 28.1,121.6 30.3,121.6 28.1,121.6 28.1,119.4 28.1,117.3 30.3,117.3 30.3,119.4 30.3,117.3 
            34.6,117.3 34.6,115.1 34.6,113 34.6,115.1 34.6,110.8 36.8,110.8 36.8,108.6 38.9,108.6 38.9,110.8 41.1,110.8 47.6,110.8 
            47.6,113 49.8,113 49.8,115.1 52,115.1 52,117.3 56.4,117.3 56.4,115.1 56.4,108.6 58.5,108.6 58.5,106.4 60.7,106.4 62.9,106.4 `,
        },
    ]
};

export default data;