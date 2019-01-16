#####################################
###                               ###
### MakeFile for Laravel Skeleton ###
###                               ###
#####################################


help: #prints list of commands
	@cat ./makefile | grep : | grep -v "grep"

composer_dep: #install composer dependency >> ./vendors
	@docker run --rm -v $(CURDIR):/app composer install

start: #start docker container
	@sudo docker-compose up -d

stop: #stop docker container
	@sudo docker-compose down

refresh: #Refresh the database and run all database seeds
	@docker-compose exec app php artisan migrate:refresh --seed


######################################
#########   Create section   #########
######################################

create_model: #create model name=[modelName]
	@docker-compose exec app php artisan make:model "Models\$(name)" -m

create_controller: #create controller name=[controllerName]
	@docker-compose exec app php artisan make:controller $(name)


######################################
#########   Control section   ########
######################################

tinker: #Run tinker
	@docker-compose exec app php artisan tinker

bash: #bash
	@docker-compose exec app bash


######################################
#########   Config section   #########
######################################

config_cache: #config cache
	@docker-compose exec app php artisan config:cache

route_cache: #route cache
	@docker-compose exec app php artisan route:cache
