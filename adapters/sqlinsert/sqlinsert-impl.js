/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var getsqlinsertStatement = WL.Server.createSQLStatement("insert into mytable(name,address,job) values(?,?,?)");
function getsqlinsert1(name,address,job) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getsqlinsertStatement,
		parameters : [name,address,job]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
function getsqlinsert2() {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "getsqlinsert"
	});
}

