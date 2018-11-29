-- 1
select name, languages.language, languages.percentage from countries
join languages on countries.id = languages.country_id
where language = 'Slovene'
order by languages.percentage desc

--2
select countries.name, count(cities.name) from countries
join cities on countries.id = cities.country_id
group by countries.id
order by count(cities.name) desc;

--3
select cities.name, cities.population from cities
where cities.country_id = 136 and population > 500000
order by cities.population desc;

--4
select countries.name, languages.language, languages.percentage from countries
join languages on countries.id = languages.country_id
where languages.percentage > 89
order by languages.percentage desc

--5
select name, surface_area, population from countries
where surface_area < 501 and population > 100000 

--6
select name, life_expectancy, government_form, capital from countries
where government_form = 'Constitutional Monarchy' AND life_expectancy > 75 and capital > 200

--7
select countries.name, cities.name, cities.district, cities.population from countries
join cities on countries.id = cities.country_id
where cities.district = 'Buenos Aires' and cities.population > 500000

--8
select region, count(name) as '# of countries' from countries
group by region
order by count(name) desc;