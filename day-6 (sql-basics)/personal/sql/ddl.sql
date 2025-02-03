-- DDL (Data Definition Language)
    -- CREATE a new database named "bitly-clone-kp"
CREATE DATABASE "bitly-clone-kp";
    -- DELETE a database named "bitly-clone-kp"
DROP DATABASE "bitly-clone-kp";

-- TABLE
    -- CREATE a new table named "urls" with the following columns:
    -- id, long-url, short-url, visit-count
    -- id is a serial PRIMARY KEY
    -- table name suppoesed to be plural and writtem in snake_case
    -- column names are written in snake_case
    -- every column must define a data type (serial, varchar, integer, date, boolean, decimal, text)
CREATE TABLE urls (
    id serial PRIMARY KEY,
    long_url varchar(255) NOT NULL,
    short_url varchar(255) UNIQUE NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL, 
    created_at timestamp DEFAULT NOW() NOT NULL
); -- The semicolon (;) is used to terminate an SQL statement

    -- UNIQUE is a constraint that ensures that the value of the column is unique
    -- example of a unique value is an email address, a username, a phone number, NRIC 

    -- UPDATE table by add new column named active
ALTER TABLE urls 
ADD COLUMN active boolean;
    -- DELETE a column named active
ALTER TABLE urls
DROP COLUMN active;
    -- REMAME column
ALTER TABLE urls
RENAME COLUMN long_url TO url;
    -- CHANGE data type of column
ALTER TABLE urls
ALTER COLUMN visit_count TYPE decimal;
    -- DELETE the table
    -- warning this will delete all data in the table
DROP TABLE urls;
