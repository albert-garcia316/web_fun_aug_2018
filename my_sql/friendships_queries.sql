--1
SELECT users.id, users.first_name, users.last_name, user2.id as 'friend_id', user2.first_name as 'friend_first_name', user2.last_name as 'friend_last_name' FROM users
JOIN friendships ON users.id = friendships.friend_1_id 
LEFT JOIN users as user2 ON friendships.friend_2_id = user2.id
where users.id = 4 or user2.id = 4;

--2
SELECT users.first_name, users.last_name, count(user2.id) as 'friend_count' FROM users
left JOIN friendships ON users.id = friendships.friend_1_id 
LEFT JOIN users as user2 ON friendships.friend_2_id = user2.id
group by users.id;

--3
SELECT  MAX(user2.num)
FROM (SELECT COUNT(user2.id) AS num
FROM users
left JOIN friendships ON users.id = friendships.friend_1_id 
LEFT JOIN users as user2 ON friendships.friend_2_id = user2.id
group by users.id
) user2;

--4
INSERT INTO users (first_name, last_name, created_at)
values ('Albert', 'Garcia', now());
insert into friendships
values (6, 2, now());
insert into friendships
values (6, 4, now());
insert into friendships
values (6, 5, now());

--5
SELECT users.first_name, users.last_name, concat(user2.first_name, ' ', user2.last_name) as 'friend_name' FROM users
JOIN friendships ON users.id = friendships.friend_1_id 
LEFT JOIN users as user2 ON friendships.friend_2_id = user2.id
where users.id = 2
order by concat(user2.first_name, ' ', user2.last_name) asc;

--6
delete from friendships where friend_1_id = 2 and friend_2_id = 5;
select * from friendships;

--7
SELECT users.id, users.first_name, users.last_name, user2.first_name as 'friend_last_name', user2.last_name as 'friend_last_name' FROM users
JOIN friendships ON users.id = friendships.friend_1_id 
LEFT JOIN users as user2 ON friendships.friend_2_id = user2.id
order by users.id;