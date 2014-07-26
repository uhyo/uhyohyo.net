#! /usr/local/bin/perl

print <<END;
Content-type:text/event-stream
Access-Control-Allow-Origin : *

END

sleep(3);
print <<END;
retry:5000
data:Hello

data:Hello2

data:foobar

event:close
END

