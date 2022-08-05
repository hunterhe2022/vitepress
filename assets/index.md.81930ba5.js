import{_ as e,c as a,o as t,a as s}from"./app.d1a54bc6.js";var n="/assets/Node.js_Architecture_Workflow.f2078d06.png",r="/assets/Docker_File.6efbcd42.png";const w=JSON.parse('{"title":"Node.js Interview Questions","description":"","frontmatter":{"title":"Node.js Interview Questions","data":"2022-08-02T00:00:00.000Z"},"headers":[{"level":2,"title":"What is Node.Js?","slug":"what-is-node-js"},{"level":2,"title":"What is event loop?","slug":"what-is-event-loop"},{"level":2,"title":"What do you understand about callbacks?","slug":"what-do-you-understand-about-callbacks"},{"level":2,"title":"What is callback hell?","slug":"what-is-callback-hell"},{"level":2,"title":"What kind of framework has been used with node.js?","slug":"what-kind-of-framework-has-been-used-with-node-js"},{"level":2,"title":"pm2 ?","slug":"pm2"},{"level":2,"title":"What is the concept of statelessness in REST?","slug":"what-is-the-concept-of-statelessness-in-rest"},{"level":2,"title":"What are HTTP Status codes?","slug":"what-are-http-status-codes"},{"level":2,"title":"What are the HTTP Methods?","slug":"what-are-the-http-methods"},{"level":2,"title":"What databases are you familiar with?","slug":"what-databases-are-you-familiar-with"},{"level":2,"title":"Explain the term \\"indexing\\" in MongoDB.","slug":"explain-the-term-indexing-in-mongodb"},{"level":2,"title":"What do you mean by Transactions?","slug":"what-do-you-mean-by-transactions"},{"level":2,"title":"sql injection or nosql injection\uFF1F","slug":"sql-injection-or-nosql-injection\uFF1F"},{"level":2,"title":"ground-up computer science","slug":"ground-up-computer-science"},{"level":2,"title":"Thread pool","slug":"thread-pool"},{"level":2,"title":"Functions","slug":"functions"},{"level":2,"title":"docker images?","slug":"docker-images"},{"level":2,"title":"docker container?","slug":"docker-container"},{"level":2,"title":"DockerFile","slug":"dockerfile"},{"level":2,"title":"","slug":""},{"level":2,"title":"Resume Template","slug":"resume-template"}],"relativePath":"index.md"}'),o={name:"index.md"},i=s('<p><img src="'+n+`" alt="\u56FE\u7247"></p><h1 id="node-js" tabindex="-1">Node.Js <a class="header-anchor" href="#node-js" aria-hidden="true">#</a></h1><h2 id="what-is-node-js" tabindex="-1">What is Node.Js? <a class="header-anchor" href="#what-is-node-js" aria-hidden="true">#</a></h2><p>Node.Js is an extremely powerful JavaScript runtime environment for running web applications outside the client&#39;s browser. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p><h2 id="what-is-event-loop" tabindex="-1">What is event loop? <a class="header-anchor" href="#what-is-event-loop" aria-hidden="true">#</a></h2><p>OK, The Event Loop allows nodejs to perform non-blocking io operations.</p><p>The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn&#39;t start processing the event loop until the code after an async function has been executed. So even though nodejs is single thread. The event loop allows nodejs to still perform multiple operations.</p><p><a href="https://nodejs.org/en/docs/guides/dont-block-the-event-loop/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/docs/guides/dont-block-the-event-loop/</a></p><h2 id="what-do-you-understand-about-callbacks" tabindex="-1">What do you understand about callbacks? <a class="header-anchor" href="#what-do-you-understand-about-callbacks" aria-hidden="true">#</a></h2><p>A callback is a function passed as an argument to another function.</p><p>callbacks are most often used with asynchronous functions.</p><p>For example, when you create a function to load a file, you cannot use the content before it is fully loaded. This is a good time to use a callback.</p><h2 id="what-is-callback-hell" tabindex="-1">What is callback hell? <a class="header-anchor" href="#what-is-callback-hell" aria-hidden="true">#</a></h2><p>callback hell is a problem that arises usually when developers try to implement asynchronous processes one after another. There are a lot of ways to solve callback hell: The general strategy is modularization. You can break up callbacks into independent functions.</p><p>You can also use async + await or generators + promises to avoid callback hell.</p><h2 id="what-kind-of-framework-has-been-used-with-node-js" tabindex="-1">What kind of framework has been used with node.js? <a class="header-anchor" href="#what-kind-of-framework-has-been-used-with-node-js" aria-hidden="true">#</a></h2><p>I&#39;m familiar with Koa.js. Koa is a very small framework that provides us with a minimal interface to build our applications. A Koa application is an object containing an array of middleware functions that are composed and executed in a stack-like manner.</p><h2 id="pm2" tabindex="-1">pm2 ? <a class="header-anchor" href="#pm2" aria-hidden="true">#</a></h2><p><a href="https://medium.com/we-code-we-write/why-and-how-you-should-use-pm2-for-a-node-js-application-in-production-5fa19dd3a856" target="_blank" rel="noopener noreferrer"></a> Automatic process restarts and keeping alive</p><p>assert \u5E94\u7528\u5C31\u7ED3\u675F\u4E86</p><p>PM2 enables you to keep applications alive forever, reloads them without downtime, helps you to manage application logging, monitoring, and clustering.</p><h1 id="restful-api" tabindex="-1">Restful API <a class="header-anchor" href="#restful-api" aria-hidden="true">#</a></h1><h2 id="what-is-the-concept-of-statelessness-in-rest" tabindex="-1">What is the concept of statelessness in REST? <a class="header-anchor" href="#what-is-the-concept-of-statelessness-in-rest" aria-hidden="true">#</a></h2><p>The REST architecture is designed in such a way that the client state is not maintained on the server. This is known as statelessness. The context is provided by the client to the server using which the server processes the client\u2019s request.</p><h2 id="what-are-http-status-codes" tabindex="-1">What are HTTP Status codes? <a class="header-anchor" href="#what-are-http-status-codes" aria-hidden="true">#</a></h2><p>These are the standard codes that refer to the predefined status of the task at the server. Following are the status codes formats available:</p><p>1xx - represents informational responses (\u4EE3\u8868\u8BF7\u6C42\u5DF2\u88AB\u63A5\u53D7\uFF0C\u9700\u8981\u7EE7\u7EED\u5904\u7406) 2xx - represents successful responses 3xx - represents redirects 4xx - represents client errors 5xx - represents server errors</p><h2 id="what-are-the-http-methods" tabindex="-1">What are the HTTP Methods? <a class="header-anchor" href="#what-are-the-http-methods" aria-hidden="true">#</a></h2><p>POST - create GET - read PUT - Update DELETE - Delete</p><p>\u9664\u4E86POST\u90FD\u8981\u8BBE\u8BA1\u6210\u5E42\u7B49\u7684</p><h1 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-hidden="true">#</a></h1><h2 id="what-databases-are-you-familiar-with" tabindex="-1">What databases are you familiar with? <a class="header-anchor" href="#what-databases-are-you-familiar-with" aria-hidden="true">#</a></h2><p>I&#39;m familiar with MongoDB. MongoDB is a non-relational database. It stores data in the key-value pair. It doesn&#39;t have much structure but it&#39;s more flexible.</p><h2 id="explain-the-term-indexing-in-mongodb" tabindex="-1">Explain the term &quot;indexing&quot; in MongoDB. <a class="header-anchor" href="#explain-the-term-indexing-in-mongodb" aria-hidden="true">#</a></h2><p>Indexes help MongoDB to query faster. An Index stores a small part of the data set in a form that is easy to traverse. The index stores the value of the specific field or set of fields, ordered by the value of the field as specified in the index.</p><h2 id="what-do-you-mean-by-transactions" tabindex="-1">What do you mean by Transactions? <a class="header-anchor" href="#what-do-you-mean-by-transactions" aria-hidden="true">#</a></h2><p>A transaction is a logical unit of processing in a database that includes one or more database operations, which can be read or write operations. Transactions provide a useful feature in MongoDB to ensure consistency.</p><h2 id="sql-injection-or-nosql-injection\uFF1F" tabindex="-1">sql injection or nosql injection\uFF1F <a class="header-anchor" href="#sql-injection-or-nosql-injection\uFF1F" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Example </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">User.findOne({</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot; : req.params.name, </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;password&quot; : req.params.password</span></span>
<span class="line"><span style="color:#A6ACCD;">}, callback); </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">If req.params.password is { $ne: 1 }, the user will be </span></span>
<span class="line"><span style="color:#A6ACCD;">retrieved without knowing the password ($ne means not </span></span>
<span class="line"><span style="color:#A6ACCD;">equals 1).</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>use Mongoose Driver As it follows a schema, if the password is a string field, it will convert the object { $ne: 1 } to string and no damage will be done. In this case, you don&#39;t need to sanitize, just remember to set a proper schema.</p><h1 id="computer-science" tabindex="-1">Computer Science <a class="header-anchor" href="#computer-science" aria-hidden="true">#</a></h1><h2 id="ground-up-computer-science" tabindex="-1">ground-up computer science <a class="header-anchor" href="#ground-up-computer-science" aria-hidden="true">#</a></h2><p>Whatever you enter into console is an expression, and whatever console gives you is a value.</p><p>variable function function call</p><h2 id="thread-pool" tabindex="-1">Thread pool <a class="header-anchor" href="#thread-pool" aria-hidden="true">#</a></h2><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h1 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-hidden="true">#</a></h1><h1 id="docker" tabindex="-1">docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h1><p><a href="https://docker.easydoc.net/" target="_blank" rel="noopener noreferrer">\u6559\u7A0B</a><img src="`+r+'" alt="\u56FE\u7247"></p><p>Docker \u662F\u4E00\u4E2A\u5E94\u7528\u6253\u5305\u3001\u5206\u53D1\u3001\u90E8\u7F72\u7684\u5DE5\u5177</p><p>\u955C\u50CF\uFF1A\u53EF\u4EE5\u7406\u89E3\u4E3A\u8F6F\u4EF6\u5B89\u88C5\u5305\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C\u4F20\u64AD\u548C\u5B89\u88C5\u3002 \u5BB9\u5668\uFF1A\u8F6F\u4EF6\u5B89\u88C5\u540E\u7684\u72B6\u6001\uFF0C\u6BCF\u4E2A\u8F6F\u4EF6\u8FD0\u884C\u73AF\u5883\u90FD\u662F\u72EC\u7ACB\u7684\u3001\u9694\u79BB\u7684\uFF0C\u79F0\u4E4B\u4E3A\u5BB9\u5668\u3002</p><p>\u76EE\u5F55\u6302\u8F7D\uFF1A\u76F4\u63A5\u628A\u5BBF\u4E3B\u673A\u76EE\u5F55\u6620\u5C04\u5230\u5BB9\u5668\u5185\uFF0C\u9002\u5408\u6302\u8F7D\u4EE3\u7801\u76EE\u5F55/\u914D\u7F6E\u6587\u4EF6</p><p>\u591A\u5BB9\u5668\u901A\u4FE1\uFF1A 1\uFF09\u4E00\u4E2A\u5BB9\u5668\u5148\u521B\u5EFA\u7F51\u7EDC 2\uFF09\u53E6\u4E00\u4E2A\u5BB9\u5668\u4F7F\u7528\u8FD9\u4E2A\u7F51\u7EDC</p><p>Docker-Compose\uFF1A \u628A\u9879\u76EE\u7684\u591A\u4E2A\u670D\u52A1\u96C6\u5408\u5230\u4E00\u8D77 \u4E00\u952E\u8FD0\u884C</p><h2 id="docker-images" tabindex="-1">docker images? <a class="header-anchor" href="#docker-images" aria-hidden="true">#</a></h2><h2 id="docker-container" tabindex="-1">docker container? <a class="header-anchor" href="#docker-container" aria-hidden="true">#</a></h2><p>Docker containers consist of applications and all their dependencies. They share the kernel and system resources with other containers and run as isolated systems in the host operating system.</p><h2 id="dockerfile" tabindex="-1">DockerFile <a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a></h2><p>It is a text file that has all commands</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h1 id="k8s" tabindex="-1">K8S <a class="header-anchor" href="#k8s" aria-hidden="true">#</a></h1><h1 id="micro-service" tabindex="-1">Micro Service <a class="header-anchor" href="#micro-service" aria-hidden="true">#</a></h1><p>\u4EE5\u524D\u5FAE\u670D\u52A1\u4E4B\u95F4\u662F\u901A\u8FC7http\u76F8\u4E92\u901A\u4FE1\u7684 \u6BCF\u4E2A\u5FAE\u670D\u52A1\u90E8\u7F72\u5728\u4E00\u4E2Adocker\u5BB9\u5668\u91CC\u9762 \u7136\u540E\u662F\u600E\u4E48\u5F04\u57DF\u540D\u7684\u54C7</p><h1 id="unit-test" tabindex="-1">unit Test <a class="header-anchor" href="#unit-test" aria-hidden="true">#</a></h1><p>Mocha unit test</p><h1 id="resume" tabindex="-1">Resume <a class="header-anchor" href="#resume" aria-hidden="true">#</a></h1><h2 id="resume-template" tabindex="-1"><a href="https://www.beamjobs.com/" target="_blank" rel="noopener noreferrer">Resume Template</a> <a class="header-anchor" href="#resume-template" aria-hidden="true">#</a></h2><h1 id="reference" tabindex="-1">Reference: <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h1><p>[1] <a href="https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions" target="_blank" rel="noopener noreferrer">Top 50+ Node.js Interview Questions and Answers for 2022</a></p><p>[2] <a href="https://www.simform.com/blog/what-is-node-js/#section2" target="_blank" rel="noopener noreferrer">What-is-node-js</a></p><p>worker thread ? \u6570\u636E\u5E93\u7684\u8BDD\u5C31\u662F</p>',71),h=[i];function l(d,c,p,u,f,m){return t(),a("div",null,h)}var g=e(o,[["render",l]]);export{w as __pageData,g as default};
