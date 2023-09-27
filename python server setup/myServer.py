from http.server import HTTPServer, BaseHTTPRequestHandler
# Import necessary modules from the http.server library

class MyServer(BaseHTTPRequestHandler):
# Define a custom request handler by subclassing BaseHTTPRequestHandler
    def do_GET(self):
        if self.path == "/":
            self.path = "/index.html"  
            # If the root path is requested, default to "index.html"
            file_to_open = open(self.path[1:]).read()  
            # Open and read the requested file
            self.send_response(200)  
            # Send a 200 OK response code
            self.end_headers()  
            # End HTTP headers
            self.wfile.write(bytes(file_to_open, 'utf-8'))  
            # Write the file content as bytes to the response

httpd = HTTPServer(('localhost', 8080), MyServer)
# Create an instance of the HTTPServer, specifying the server address and custom request handler

httpd.serve_forever()
# Start the HTTP server and let it serve requests indefinitely