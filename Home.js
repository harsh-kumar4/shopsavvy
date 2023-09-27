import React from 'react'
import './Home.css'
import Product  from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='hconatiner'>
            <img className='homeimg' src='https://cdn.dribbble.com/users/12601/screenshots/3554804/gif.gif' alt='not found'/>
            {/* <img className='homeimg' src='https://cdn.dribbble.com/users/249246/screenshots/2958948/shopping.gif' alt='not found'/> */}

        
            <div className='homerow'>
                <Product title='Best Watches' price={600} image="https://hips.hearstapps.com/hmg-prod/images/zenith-best-watches-1667840870.png?resize=480:*" alt="not found" />

                <Product title='Mobile Phone' price={25000} image="https://rukminim1.flixcart.com/image/200/200/xif0q/cases-covers/back-cover/j/i/6/mycas-black-vv-y35-qcase-original-imagj87uwxzarrzk.jpeg?q=70" alt="not found" />
                
                <Product title='Laptop' price={30000} image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="not found" />

                <Product title='Matress' price={1000} image="https://m.media-amazon.com/images/I/81f2P-POnWL._AC_SY200_.jpg" alt="not found" />
                
                <Product title='Shoe' price={220} image="https://m.media-amazon.com/images/I/71tYPz++3+L._AC_UL600_FMwebp_QL65_.jpg" alt="not found" />


            </div>

            <div className='homerow'>
                <Product title='Teddy bear' price={800} image="https://th.bing.com/th/id/R.94449587a27cfb6bc8c24778705114c8?rik=4rA04j%2fIGwdY9g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ds9qPv27V_g%2fT3FuWRf00jI%2fAAAAAAAABZk%2fIFd2FYyAFJE%2fs1600%2fChristmas%2bTeddy%2bBear%2bWallpapers%2b1.jpg&ehk=ib9n%2bPEaTC4hJ%2fkfHV1pC7GLlQA1g9fZmMllDcH8z7c%3d&risl=&pid=ImgRaw&r=0" />

                <Product title='Mirror' price={150} image="https://images.furnituredealer.net/img/products/coaster/color/accent%20mirrors_901733-b0.jpg" alt="not found" />

                <Product title='Lamp' price={1500} image="https://th.bing.com/th/id/OIP.j-YJ-kGNAwJBa2AVtZMC7wHaLM?pid=ImgDet&rs=1" alt="not found" />

                <Product title='House Lamp' price={1999} image="https://th.bing.com/th/id/R.495995ff5369af4d1665101f1efc5f7b?rik=ALHhhtzVylW8Mg&riu=http%3a%2f%2fwww.genuineantiquelighting.net%2fMerchant2%2fgraphics%2f00000001%2fAntique+Chandelier_1849ge.jpg&ehk=FNupwvkW8s34Nhg%2b1NEOfAMJxqqdZMwuopV7RxvHyhY%3d&risl=&pid=ImgRaw&r=0" alt="not found" />

                <Product title='Bottol' price={999} image="https://cdn.sweatband.com/camelbak_eddy_0.6l_water_bottle_camelbak_eddy_0.6l_water_bottle_-_main_2000x2000.jpg" alt="not found" />

            </div>

            <div className='homerow'>
                <Product title='Table' price={500} image="https://i.ebayimg.com/00/s/NjUzWDY5Mg==/z/PbIAAOSw3q5agvus/$_86.JPG" alt="not found" />

                <Product title='Chair' price={2999} image="https://th.bing.com/th/id/OIP.kHqUDcaAzBArX4U9zNdhtgHaHQ?pid=ImgDet&rs=1" alt="not found" />

                <Product title='Fan' price={1999} image="https://cdn.shopify.com/s/files/1/0382/8869/products/quorum-estate-patio-ceiling-fan-1435259_1000x1200.jpg?v=1571267811" alt="not found" />
                
                <Product title='Cooler' price={9599} image="https://th.bing.com/th/id/OIP.Fk6QpaYO3CnYFBbwqoTIJgHaHa?pid=ImgDet&rs=1" alt="not found" />
                
                <Product title='Kettle' price={800} image="https://th.bing.com/th/id/R.488b65ddf33933b8cd890f9219ac32ef?rik=vD4fE6gmnIds9A&riu=http%3a%2f%2fcdn.shopclues.net%2fimages%2fdetailed%2f9541%2f661404061WPIE9kwdL1400400604_1418183156.jpg&ehk=LQw9%2fpk%2bZX2ZnGTbpDCgemK9m5HQpNJl1ii9zPtCkvc%3d&risl=&pid=ImgRaw&r=0" alt="not found" />

            
            </div>

            <div className='homerow'>
                <Product title='Laptop' price={50000} image="https://www.bhphotovideo.com/images/images2500x2500/asus_r556la_rh31_wx_15_6_r556la_notebook_1183461.jpg" alt="not found" />

                <Product title='Keyboard' price={900} image="https://th.bing.com/th/id/R.c0ac825cbc98469d5f0bf0b768a3052d?rik=8opxdu%2b64q%2f4wg&riu=http%3a%2f%2f4.bp.blogspot.com%2f_fM4vA5cQ6aY%2fTGybGCM5ZoI%2fAAAAAAAAABE%2fRN-8GNIlMho%2fs1600%2fkeyboard-pc.jpg&ehk=FVGw9gBsGTUDlKfOpAumXDdWu1G%2bBkWeTaY%2fvom8oDo%3d&risl=&pid=ImgRaw&r=0" alt="not found" />

                <Product title='Mouse' price={599} image="https://satriarefill.files.wordpress.com/2010/12/gb-mouse1.jpg" alt="not found" />
                
                <Product title='Printer' price={7599} image="https://th.bing.com/th/id/OIP.znHhnZcHPk4LATQIirmf-wHaGV?pid=ImgDet&rs=1" alt="not found" />
               
                <Product title='LED Writing  pad' price={299} image="https://www.nurseoclock.dk/media/catalog/product/cache/12/image/9df78eab33525d08d6e5fb8d27136e95/b/0/b085a-blu-new_blue.jpg" alt="not found" />
            </div>

            <div className='homerow'>
                <Product title='Pen' price={8000} image="https://th.bing.com/th/id/OIP.AR42iu76UawqHm5RNkazdgHaGi?pid=ImgDet&rs=1" alt="not found" />

                <Product title='Camera' price={15000} image="https://th.bing.com/th/id/R.ae2d23ee3394a2289e234b6e98e1c0a6?rik=XJXf10flfinghQ&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f815iZYNaLNL._SL1500_.jpg&ehk=XAEuqC8w98TexXigAX3993PtlW%2bUxjs4ne%2bjUCdwYvE%3d&risl=&pid=ImgRaw&r=0" alt="not found" />

                <Product title='Slippers' price={299} image="https://th.bing.com/th/id/R.a40031851cc1efc2c76819b68b1cb5a1?rik=fljzxML8y1AbSA&riu=http%3a%2f%2fdigital.hammacher.com%2fItems%2f89389%2f89389_1000x1000.jpg&ehk=QyuMABu41Twl085P9%2bOp0m90GBiNKCIBpUUTwrvXHCw%3d&risl=&pid=ImgRaw&r=0" alt="not found" />

                <Product title='Best Book' price={299} image="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg" alt="not found" />

            </div>

            <div className='homerow'>

                <Product title='T shirt' price={250} image="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1650552317_6930636.jpg?w=376&dpr=1.0" alt="not found" />

                <Product title='Jinse' price={600} image="https://4.imimg.com/data4/VJ/DD/MY-9606911/72.jpg" alt="not found" />

                <Product title='Cycle' price={5999} image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/06/30/699519-cycle.jpg" alt="not found" />

            </div>

        </div>
    </div>
  )
}

export default Home