(function() {var implementors = {};
implementors["lambda_extension"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"lambda_extension/requests/struct.ErrorRequest.html\" title=\"struct lambda_extension::requests::ErrorRequest\">ErrorRequest</a>&lt;'a&gt;","synthetic":true,"types":["lambda_extension::requests::ErrorRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_extension/struct.ExtensionError.html\" title=\"struct lambda_extension::ExtensionError\">ExtensionError</a>","synthetic":true,"types":["lambda_extension::ExtensionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_extension/struct.Tracing.html\" title=\"struct lambda_extension::Tracing\">Tracing</a>","synthetic":true,"types":["lambda_extension::Tracing"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_extension/struct.InvokeEvent.html\" title=\"struct lambda_extension::InvokeEvent\">InvokeEvent</a>","synthetic":true,"types":["lambda_extension::InvokeEvent"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_extension/struct.ShutdownEvent.html\" title=\"struct lambda_extension::ShutdownEvent\">ShutdownEvent</a>","synthetic":true,"types":["lambda_extension::ShutdownEvent"]},{"text":"impl Freeze for <a class=\"enum\" href=\"lambda_extension/enum.NextEvent.html\" title=\"enum lambda_extension::NextEvent\">NextEvent</a>","synthetic":true,"types":["lambda_extension::NextEvent"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"lambda_extension/struct.ExtensionFn.html\" title=\"struct lambda_extension::ExtensionFn\">ExtensionFn</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["lambda_extension::ExtensionFn"]},{"text":"impl&lt;C&nbsp;=&nbsp;HttpConnector&lt;GaiResolver&gt;&gt; !Freeze for <a class=\"struct\" href=\"lambda_extension/struct.Runtime.html\" title=\"struct lambda_extension::Runtime\">Runtime</a>&lt;C&gt;","synthetic":true,"types":["lambda_extension::Runtime"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"lambda_extension/struct.RuntimeBuilder.html\" title=\"struct lambda_extension::RuntimeBuilder\">RuntimeBuilder</a>&lt;'a&gt;","synthetic":true,"types":["lambda_extension::RuntimeBuilder"]}];
implementors["lambda_http"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"lambda_http/enum.Body.html\" title=\"enum lambda_http::Body\">Body</a>","synthetic":true,"types":["lambda_http::body::Body"]},{"text":"impl Freeze for <a class=\"enum\" href=\"lambda_http/ext/enum.PayloadError.html\" title=\"enum lambda_http::ext::PayloadError\">PayloadError</a>","synthetic":true,"types":["lambda_http::ext::PayloadError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/request/struct.ApiGatewayV2RequestContext.html\" title=\"struct lambda_http::request::ApiGatewayV2RequestContext\">ApiGatewayV2RequestContext</a>","synthetic":true,"types":["lambda_http::request::ApiGatewayV2RequestContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/request/struct.ApiGatewayRequestContext.html\" title=\"struct lambda_http::request::ApiGatewayRequestContext\">ApiGatewayRequestContext</a>","synthetic":true,"types":["lambda_http::request::ApiGatewayRequestContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/request/struct.AlbRequestContext.html\" title=\"struct lambda_http::request::AlbRequestContext\">AlbRequestContext</a>","synthetic":true,"types":["lambda_http::request::AlbRequestContext"]},{"text":"impl Freeze for <a class=\"enum\" href=\"lambda_http/request/enum.RequestContext.html\" title=\"enum lambda_http::request::RequestContext\">RequestContext</a>","synthetic":true,"types":["lambda_http::request::RequestContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/request/struct.Elb.html\" title=\"struct lambda_http::request::Elb\">Elb</a>","synthetic":true,"types":["lambda_http::request::Elb"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/request/struct.Http.html\" title=\"struct lambda_http::request::Http\">Http</a>","synthetic":true,"types":["lambda_http::request::Http"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/request/struct.Identity.html\" title=\"struct lambda_http::request::Identity\">Identity</a>","synthetic":true,"types":["lambda_http::request::Identity"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_http/struct.StrMap.html\" title=\"struct lambda_http::StrMap\">StrMap</a>","synthetic":true,"types":["lambda_http::strmap::StrMap"]},{"text":"impl&lt;'a, H&gt; Freeze for <a class=\"struct\" href=\"lambda_http/struct.Adapter.html\" title=\"struct lambda_http::Adapter\">Adapter</a>&lt;'a, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Freeze,&nbsp;</span>","synthetic":true,"types":["lambda_http::Adapter"]}];
implementors["lambda_runtime"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_runtime/struct.Context.html\" title=\"struct lambda_runtime::Context\">Context</a>","synthetic":true,"types":["lambda_runtime::types::Context"]},{"text":"impl Freeze for <a class=\"struct\" href=\"lambda_runtime/struct.Config.html\" title=\"struct lambda_runtime::Config\">Config</a>","synthetic":true,"types":["lambda_runtime::Config"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"lambda_runtime/struct.HandlerFn.html\" title=\"struct lambda_runtime::HandlerFn\">HandlerFn</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["lambda_runtime::HandlerFn"]}];
implementors["lambda_runtime_api_client"] = [{"text":"impl&lt;C&nbsp;=&nbsp;HttpConnector&lt;GaiResolver&gt;&gt; !Freeze for <a class=\"struct\" href=\"lambda_runtime_api_client/struct.Client.html\" title=\"struct lambda_runtime_api_client::Client\">Client</a>&lt;C&gt;","synthetic":true,"types":["lambda_runtime_api_client::Client"]},{"text":"impl&lt;C&nbsp;=&nbsp;HttpConnector&lt;GaiResolver&gt;&gt; !Freeze for <a class=\"struct\" href=\"lambda_runtime_api_client/struct.ClientBuilder.html\" title=\"struct lambda_runtime_api_client::ClientBuilder\">ClientBuilder</a>&lt;C&gt;","synthetic":true,"types":["lambda_runtime_api_client::ClientBuilder"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()