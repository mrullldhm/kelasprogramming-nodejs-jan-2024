-- DML (Data Manipulation Language)
-- CRUD (Create, Read, Update, Delete)

    -- INSERT a new row into the table
    INSERT INTO urls (long_url, short_url, visit_count, created_at)
    VALUES ('https://www.google.com', 'https://bit.ly/3e4r5t', 0, NOW());

    -- DELETE vs TRUNCATE
    -- DELETE will delete all rows in the table - DML
    -- TRUNCATE will delete all rows in the table and reset the auto-increment counter - DDL

    -- UPDATE the visit_count of the row with id 1 
    UPDATE urls
    SET visit_count = visit_count + 1
    WHERE id = 1;

    --  DELETE the row with id 1
    DELETE FROM urls
    WHERE id = 1;

    -- READ all rows from the table
    SELECT * 
    FROM urls;

    -- READ all columns from column long_url,  short_url and visit_count
    SELECT long_url, short_url, visit_count
    FROM urls;

    -- RENAME column long_url to url in the table urls
    ALTER TABLE urls
    RENAME COLUMN long_url TO url;

    -- READ all rows from the table with renamed columns for display purposes
    SELECT long_url AS "long url", short_url AS "short url", visit_count AS "visit count"
    FROM urls;

    -- FILTERING
    --  READ all rows from the table where visit_count is greater than 4
    SELECT *
    FROM urls
    WHERE visit_count > 4;

    -- COUNT the number of rows in the table
    SELECT COUNT(*) AS "Url counts"
    FROM urls;

    -- AVERAGE visit_count
    SELECT AVG(visit_count) AS "Average visit count"
    FROM urls;

    -- MEDIAN visit_count
    SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY visit_count) AS "Median visit count"
    FROM urls;