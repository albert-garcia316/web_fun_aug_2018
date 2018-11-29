--1
select  sum(amount) as 'amount_march_2012' from billing
where charged_datetime between '2012-03-01' and '2012-03-31'

--2
select clients.client_id, sum(amount) as 'amount_client_2' from billing
join clients on billing.client_id = clients.client_id
where clients.client_id = 2;

--3
select clients.client_id, clients.first_name, sites.domain_name from sites
join clients on sites.client_id = clients.client_id
where clients.client_id = 10;

--4
select clients.client_id, clients.first_name, count(sites.domain_name) as 'website_count', 
date_format( sites.created_datetime, '%b') as 'month_created',
date_format( sites.created_datetime, '%Y') as 'year_created'
from sites
join clients on sites.client_id = clients.client_id
where clients.client_id = 1 -- or clients.client_id = 20
group by sites.domain_name;

--5
select sites.domain_name, count(leads.site_id) as 'leads_generated', leads.registered_datetime from leads
join sites on leads.site_id = sites.site_id
where leads.registered_datetime between '2011-01-01' and '2011-02-15'
group by leads.site_id;

--6
select clients.first_name, count(sites.client_id) as 'leads_generated', leads.registered_datetime from leads
join sites on leads.site_id = sites.site_id
join clients on sites.client_id = clients.client_id
where leads.registered_datetime between '2011-01-01' and '2011-12-31'
group by sites.client_id;

--7
select clients.first_name, count(sites.client_id) as 'leads_generated', date_format(leads.registered_datetime, '%b') as 'month' from leads
join sites on leads.site_id = sites.site_id
join clients on sites.client_id = clients.client_id
where leads.registered_datetime between '2011-01-01' and '2011-06-30'
group by leads.registered_datetime;

--8
select clients.client_id, clients.first_name, clients.last_name, sites.domain_name, count(sites.client_id) as 'leads_generated', 
date_format(leads.registered_datetime, '%Y') as '2011' from leads
join sites on leads.site_id = sites.site_id
join clients on sites.client_id = clients.client_id
where leads.registered_datetime between '2011-01-01' and '2011-12-31'
group by sites.site_id
order by clients.client_id;
select clients.client_id, clients.first_name, clients.last_name, sites.domain_name, count(sites.client_id) as 'leads_generated', 
date_format(leads.registered_datetime, '%Y') as '2011' from leads
join sites on leads.site_id = sites.site_id
join clients on sites.client_id = clients.client_id
group by sites.site_id
order by clients.client_id;

--9
select clients.client_id, clients.first_name, clients.last_name, sum(billing.amount) as 'total_revenue', 
date_format(billing.charged_datetime, '%b') as 'month', date_format(billing.charged_datetime, '%Y') as 'year'
from billing
join clients on billing.client_id = clients.client_id
group by billing.charged_datetime
order by clients.client_id;

--10
select clients.client_id, first_name, last_name, 
group_concat(distinct sites.domain_name order by sites.domain_name asc separator ' / ') 
as 'sites' from clients
join sites on clients.client_id = sites.client_id
group by clients.client_id 
order by clients.client_id;