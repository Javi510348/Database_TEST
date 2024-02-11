#DB connection

from backend.config.pg_config import pg
import psycopg2


class personDAO:

    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s port=%s host ='aws-0-us-east-1.pooler.supabase.com'"%(pg['DATABASE'],pg['USER'],pg['PASS'],pg['PORT'])
        self.conn=psycopg2.connect(connection_url)



#Get All
def getAll(self):
    query="select * from Person"
    cursor=self.conn.cursor()
    cursor.execute(query)
    result=[]
    for row in cursor:
        result.append(row)
    return result