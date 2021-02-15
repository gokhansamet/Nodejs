# Nodejs Repo Information
  
## Node Farm
It is a basic Nodejs application. The application receives a request and sends a data as a response to the client.

![Node Farm Overview Page](https://i.hizliresim.com/RUWStx.png)

The picture above shows the overfiew of the application.  We have various products that have many information.You can see whether to be organic, the price and quantity for each produts and  for more detail you can click the detail button.

![Node Farm Product Detail Page](https://i.hizliresim.com/i4Txku.png)

The product detail page shows the detail that related product as you can understand from the name. You can see the product where is from coming, what are the vitamins that it's has and the description. Also the add cart button exists to add the product to the shopping card (seeing the prices)

#### Note 
I got information about streams and codes from the **Node.js, Express, MongoDB & More: The Complete Bootcamp 2021** course that instructor Jonas Schmedtmann.
There is the link: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp

_________________________________________________________________________________________________________________________________________________
## Streams Example
### What are the streams ? 
Streams are used to process (read and write) data piece by piece (chunk) without waiting to read or write the all data therefore we get free memory and get time. Perfect for  handling large volumes of data for example videos.

<style> 
  
  img {
    display : block
    margin : auto
  }

</style>

![Streams Table](https://i.hizliresim.com/U7pVBx.png)

The above the table shows us kind of streams. Readable and Writeable are the most important streams. You can have a look at.

Below you can see some of streaming companies.
<p display = "inline" >
<img src = "https://www.youtube.com/img/desktop/yt_1200.png"  width = 100 height = 64  />
<img src = "https://yt3.ggpht.com/ytc/AAUvwnjWyBS5c0NrKoO9_UvJaNdyioRIk8Q84t83rUy24w=s900-c-k-c0x00ffffff-no-rj" width = 100 height = 64 />
<img src = "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" width = 100 height = 64/>
<img src = "https://www.webtekno.com/images/editor/default/0001/78/b287ea98c84d103a9beb8496da4f9095f1f12e5b.png" width = 100 height = 64 />
<img src = "https://acorn.tv/wp-content/themes/rlje/plugins/rlje-theme-settings/themes/acorn/img/social-logo.png" width = 100 height = 64 />
<img src = "https://www.cordcuttersnews.com/wp-content/uploads/2019/09/Showtime_logo.jpg" width = 100 height = 64/>

_________________________________________________________________________________________________________________________________________________

### What is the code's usage area ? 
If we need reading a large text file from the file system and send it to the client then we can use the this code that includes 3 different solutions. Basically read the files from a server and send it to a client as a response.
_________________________________________________________________________________________________________________________________________________
### Solution 1 
This solution is fine but there is a problem. Node have to load the entire data into memory because only after that's ready it can send the data to a client but if we have a big file as a we have in the folder, the app will be crashed because Node process consumes resources very quickly.Therefore you can use it while using a small text file, you can't with a big file.
### Solution 2 : Streams
We can use the streams that are a efficient way to read or write a big file. The streams reads the data piece by piece and sends it as a piece of data  to a client until the all data is loaded. But another problem appears, while using the streams the write operation doesn't as fast as the read operation and it's called **backpressure**. To fix the backpressure we can use the code which in the Solution 3
### Solution 3 : To Fix The Backpressure
As we said, the problem was **backpressure** so we can use this solution 3 to fix it. Create a readable stream as we done before in Solution 2 , read and send the data into the writeable stream as an input using the **pipe()** function. It handles the speed of incoming data so we can fix the backpressure therefore this solution is the best efficent way.
_________________________________________________________________________________________________________________________________________________
#### Note 
I got information about streams and codes from the **Node.js, Express, MongoDB & More: The Complete Bootcamp 2021** course that instructor Jonas Schmedtmann.
There is the link: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp
