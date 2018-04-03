var oracledb = require('oracledb');

oracledb.getConnection(
    {
        user: "LEO",
        password: "leo21edu31",
        connectionString: "192.168.56.1:1521/XE"
    },
    function(err, connection){
        if(err){
            console.log(err.message);
            return;
        }
        connection.execute(
            'SELECT * FROM LEONARDO.DEPARTAMENTOS',
            [],
            {
                outFormat: oracledb.OBJECT,
            },
            function(err, result){
                if(err){
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                //console.log(result.metaData);
                //var js = JSON.parse(result.row);
                //console.log(js);
                console.log(result.rows);
                doRelease(connection);
            }
        )
    }
);

function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}
