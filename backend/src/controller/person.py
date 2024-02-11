from flask import jsonify


from src.dao.person import personDAO



class PersonController:

    def build_dictionary(self,row):
        result={}
        result['id']=row[0]
        result['Name']=row[1]
        result['LastName']=row[2]
        return result
    



    def getAll(self):
        dao= personDAO()
        result_tuples= dao.getAll()
        result=[]
        for row in result_tuples:
            dictionary=self.build_dictionary(row)
            result.append(dictionary)
        return jsonify(result)