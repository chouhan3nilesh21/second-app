import { Button } from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import React, { Fragment, useState } from 'react';
import transactionData from './data/Transactions.json';
import ManageTransactionsActions from './ManageTransactionsActions';
import StatusBullet from './SatatusBullet';

const columns = [

    {
        field: 'id', headerName: 'ID',type:'number', flex: 0.5, hide: true

    },

    {
        field: 'refNum', headerName: 'Ref number',type:'number', minWidth:150,  flex: 0
    },

    {
        field: 'payFrom', headerName: 'Pay From', type : 'string',minWidth:200,  flex: 1
    },

    {
        field: 'payTo', headerName: 'Pay To',type : 'string',minWidth:200,  flex: 1
    },
    {
        field: 'amount', headerName: 'Amount',type:'string',minWidth:150,  flex: 0
    },
    {
        field: 'paymentDate', headerName: 'Payment Date',type : 'date',minWidth:150,  flex: 0
    },
    {
        field: 'paymentType', headerName: 'Payment Type',type : 'string',minWidth:100,  flex: 0.75
    },
    {
        field: 'status', headerName: 'Status',  flex: .5,
        renderCell: (params) => (
            <span>
                <StatusBullet
                color={params.value}
                size="lg"
            />
             {" "+params.value}
            </span>                             
        )
    },
    {
        field: 'actions', headerName: 'Actions',  flex: 1,
        renderHeader:  (params) => (
            
            <ManageTransactionsActions /> 
        ),
        renderCell: (params) => (
            
            <ManageTransactionsActions />
                
        )

    },
];



export default function ManageTransactions() {

    const [transactions, setTransactions] = useState(transactionData);


    return (
        <div style={{  width: '100%', }}>
            <DataGrid
                rows={transactions}
                // rowHeight = {100}
                columns={columns}
                // pageSize={10}
                columnBuffer={2}
                checkboxSelection
                components={{
                    Toolbar: GridToolbar,
                }}
                
                disableSelectionOnClick
                autoHeight = 'true'
            />
        </div>
    );
}
