# Nodejs Repo Information

_________________________________________________________________________________________________________________________________________________
## Node Farm
It is a basic Nodejs application. The application receives a request and sends a data as a response to the client.

![Node Farm Overview Page](https://i.hizliresim.com/RUWStx.png)

The picture above shows the overfiew of the application.  We have various products that have many information.You can see whether to be organic, the price and quantity for each produts and  for more detail you can click the detail button.

![Node Farm Product Detail Page](https://i.hizliresim.com/i4Txku.png)

The product detail page shows the detail that related product as you can understand from the name. You can see the product where is from coming, what are the vitamins that it's has and the description. Also the add cart button exists to add the product to the shopping card (seeing the prices)

#### Note 
I got information from the **Node.js, Express, MongoDB & More: The Complete Bootcamp 2021** course that instructor Jonas Schmedtmann.
There is the link: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp
_________________________________________________________________________________________________________________________________________________
## Streams Example
### What are the streams ? 
Streams are used to process (read and write) data piece by piece (chunk) without waiting to read or write the all data therefore we get free memory and get time. Perfect for  handling large volumes of data for example videos.

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

### What is the code's usage area ? 
If we need reading a large text file from the file system and send it to the client then we can use the this code that includes 3 different solutions. Basically read the files from a server and send it to a client as a response.
### Solution 1 
This solution is fine but there is a problem. Node have to load the entire data into memory because only after that's ready it can send the data to a client but if we have a big file as a we have in the folder, the app will be crashed because Node process consumes resources very quickly.Therefore you can use it while using a small text file, you can't with a big file.
### Solution 2 : Streams
We can use the streams that are a efficient way to read or write a big file. The streams reads the data piece by piece and sends it as a piece of data  to a client until the all data is loaded. But another problem appears, while using the streams the write operation doesn't as fast as the read operation and it's called **backpressure**. To fix the backpressure we can use the code which in the Solution 3
### Solution 3 : To Fix The Backpressure
As we said, the problem was **backpressure** so we can use this solution 3 to fix it. Create a readable stream as we done before in Solution 2 , read and send the data into the writeable stream as an input using the **pipe()** function. It handles the speed of incoming data so we can fix the backpressure therefore this solution is the best efficent way.
_________________________________________________________________________________________________________________________________________________
#### Note 
I got the codes from the **Node.js, Express, MongoDB & More: The Complete Bootcamp 2021** course that instructor Jonas Schmedtmann.
There is the link: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp
_________________________________________________________________________________________________________________________________________________
### Require and Exports Example
We can use the require module for three different uses

* Core modules

> require("http")

* Developer modules

> require("./develop")

> If we create a developer modules should use "./" or "../"

* 3rd party modules

> require("express")

> From npm 

If you want to send multiple value, you should use **exports**, otherwise if you can to send a single variable, you should **module.exports**

#### Caching
If we run the code that in caching.js you can see the output below

![Output](https://i.hizliresim.com/br0GhQ.png)

"Hello World" executed once because when we run the require module it reads the entire file and it also stored the module.exports into the cache then we can call many times the cache() function it rendered only "Hello from caching".

#### Note 
I got information from the **Node.js, Express, MongoDB & More: The Complete Bootcamp 2021** course that instructor Jonas Schmedtmann.
There is the link: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp
_________________________________________________________________________________________________________________________________________________
### Promises and Async/Await 
If you use the nested callback functions so much then there can be a problem that is called **callback hell**. To fix the problem we use promises(ES6) or async/await (ES2017).
In this project we have a txt file that is called dog.txt and have an API that is located on https://dog.ceo/dog-api. We get the data from API then write the data in a txt file.

A promise is commonly defined as a proxy for a value that will eventually become available.The promises said to us "Hey I will fetch the data from as you wish, promise you!  I will be in "pending state"until the data is available if the process of fetching data is successful then I will be in "resolve state" otherwise if there is an error will be in "reject state". Besides, to consume the promises then() and cath() methods are used. But there is a better way that is async/await. Using async is better than the use callbacks functions to create a promises because after a certain time the promises can be more complex.

Async always returns a promise then we use await that means is "the calling code will stop until the promise is resolved or rejected". You can see the codes in the project.

Also in there multiple promises example, the classic way to read,write and get data.

#### Note 
I got the codes from the **Node.js, Express, MongoDB & More: The Complete Bootcamp 2021** course that instructor Jonas Schmedtmann.
There is the link: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp


