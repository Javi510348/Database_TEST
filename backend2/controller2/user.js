const dao= require('../queries')




const build_dictionaty= (row) => {
    result={}
    result['id'] = row[0]
    result['Name']=row[1]
    result['LastName']= row[2]
    console.log(row)
    return result

}



const getAll = () => {
    
    result_tuples= dao.getUsers()
    console.log(result_tuples)
    let result=[]
    for (row in result_tuples){
        dictionary=build_dictionaty(row)
        result.push(dictionary)
    }
    console.log(result)
    return JSON.stringify(result)



}


const getAll2 = async () => {
    
    
    result_tuples= await dao.getUsers2()
    // let result=[]

    // for(var i=0;i<result_tuples.length;i++){
    //     dictionary=await build_dictionaty(result_tuples[i])
    //     result.push(dictionary)
    // }

    // for (row in result_tuples){
    //     console.log(row)
    //     dictionary=build_dictionaty(row)
    //     result.push(dictionary)
    // }
    
    return result_tuples
}


const newuser = async (information) => {

    console.log(information)
    test = await dao.createUser(information)



    return test

}

module.exports={
    getAll,
    getAll2,
    newuser
}