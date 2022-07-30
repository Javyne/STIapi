//Database
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteData = async (res, table, where) => {
    
    try {
        const resData = await prisma[table].delete({
            where: where,  
        });


        if (resData){
            res.status(201).json({delete: true});
        }else{
            res.status(404).json({delete: false});
        }

    } catch (error) {
        res.status(500).json({ error });
    }
}

const getData = async (res, table, where) => {
    
    try {

        const resData = await prisma[table].findUnique({where: where});

        if (resData){
            res.status(200).json(resData);
        }else{
            res.status(404).json(resData);;
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
}

const getDatas = async (res, table) => {
    
    try {
        
        const resData = await prisma[table].findMany();
        
        if (resData){
            res.status(200).json(resData);
        }else{
            res.status(404).json(resData);;
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error });
    }
}

const createData = async () =>{
    try {
        const resData = await prisma[table].create({
            data: data        
        });


        if (resData){
            res.status(201).json({created: true});
        }else{
            res.status(404).json({created: false});
        }

    } catch (error) {
        res.status(500).json({ error });
    }
}

const updateData = async (res, table, where, data) => {
    
    try {
        const resData = await prisma[table].update({
            where: where,
            data: data        
        });

        
        if (resData){
            res.status(201).json({updated: true});
        }else{
            res.status(404).json({updated: false});
        }
        
    } catch (error) {
        res.status(500).json({ error });
    }
}




module.exports = {
    deleteData,
    getData,
    getDatas,
    createData,
    prisma,
    updateData
}