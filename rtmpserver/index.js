const NodeMediaServer = require('node-media-server');

// Resource: https://github.com/illuspas/Node-Media-Server
// Singlecore mode RTMP configuration - we do not expect a lot of users - if users were to increase swtich to MultiCore
const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    }
};

var nms = new NodeMediaServer(config);
nms.run();