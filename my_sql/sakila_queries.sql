-- 1
select city.city_id, city.city, customer.first_name, customer.last_name, customer.email, address.address  from city
join address on city.city_id = address.city_id
join customer on address.address_id = customer.address_id
where city.city_id = 312;

--2
select category.category_id, category.name as 'genre', film.title, film.description, film.release_year, film.rating from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.category_id = 5;

--3
select actor.actor_id, concat(actor.first_name, ' ', actor.last_name) as 'actor_name', film.title, film.description, film.release_year from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where actor.actor_id = 5;

--4
select store.store_id, city.city_id, customer.first_name, customer.last_name, customer.email, address.address from city
join address on city.city_id = address.city_id
join customer on address.address_id = customer.address_id
join store on customer.store_id = store.store_id
where
(city.city_id = 1 or city.city_id = 42 or city.city_id = 312 or city.city_id = 459) and store.store_id =1;

--5
select actor.actor_id, title, description, release_year, rating, special_features from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where special_features like '%behind%' and rating = 'G' and actor.actor_id = 15;

--6
select film.film_id, title, actor.actor_id, concat(actor.first_name, ' ', actor.last_name) as 'actor_name' from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where film.film_id = 369;

--7
select title, description, release_year, rating, special_features, category.name as 'genre', rental_rate from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.name = 'drama' and rental_rate = 2.99;

--8
select title, description, release_year, rating, special_features, category.name as 'genre', 
concat(actor.first_name, ' ', actor.last_name) as 'actor_name' from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where actor.actor_id = 23 and category.name = 'Action';