# cs316_project

To create and load the WasteNoMore database, navigate to the directory containing the create.sql and load.sql files and run the following commands: <br />
1. dropdb wastenomore
2. createdb wastenomore
3. psql wastenomore -af create.sql
4. psql wastenomore -af load.sql