
# Vagrant Dev Environment Setup Guide
1. On host machine, with the Vagrantfile, `vagrant up`
2. `vagrant ssh`

# Set Up Dev Environment:
3. `sudo apt-get update`
4. `sudo apt-get install apache2`
5. `sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql`
    - set password: password
    - confirm password: password
6. `sudo mysql_install_db`
7. `sudo /usr/bin/mysql_secure_installation`
    - enter "password" at prompt
    - "n" to change root password
    - "y" to remove anonymous users
    - "y" to disallow root login remotely
    - "y" to remove test database and access to it
    - "y" to reload privelege tables
8.  `sudo apt-get install php5 libapache2-mod-php5 php5-mcrypt`
    - "y" at prompt

# Modify .conf files:

9. `sudo vim /etc/apache2/mods-enabled/dir.conf`
    - Add index.php to the start. It should look like:
    
    ```
    <IfModule mod_dir.c>
        DirectoryIndex index.php index.html index.cgi index.pl index.php index.xhtml index.htm
    </IfModule>
    ```

10. `sudo service apache2 restart`

# Install Git:
11. `sudo apt-get install git`

# Change ownership and permissions:
12. `sudo adduser vagrant www-data`
13. `sudo chown -R www-data:www-data /var/www`
14. `sudo chmod -R g+rw /var/www`
15. Exit, and `vagrant reload`
16. `vagrant ssh` back in

# Install php5-cli:
17. `sudo apt-get install curl php5-cli git`
18. `sudo a2enmod rewrite`
19. `sudo service apache2 restart`

# Clone into our github:
20. `git clone https://github.com/austinchenSMU/TwitGood.git`
    - or,  `git clone -b staging https://github.com/austinchenSMU/TwitGood.git` if you want to clone into a specific branch
21. http://localhost:7070/TwitGood/backend/public/ shouldn’t show, so to fix:
    - `sudo chown -R www-data:www-data /var/www/html`

# Clean up errors:
22. `sudo vim /etc/apache2/sites-available/000-default.conf`
    - Modify the file to look like this:

    ```
    ...
    CustomLog ${APACHE_LOG_DIR}/access. log combined
    
    <Directory /var/www/html>
		Options Indexes FollowSymLinks MultiViews
		AllowOverride All
		Order allow,deny
		allow from all
    </Directory>
    
    # For most configuration files from conf-available/, which are
    # enabled or disabled at a global level, it is possible to ...
    ```
# Update mySQL to mySQL 5.7
23. Update to mySQL 5.7
    - `sudo wget http://dev.mysql.com/get/mysql-apt-config_0.8.0-1_all.deb`
    - `sudo dpkg -i mysql-apt-config_0.8.0-1_all.deb`
        - At the prompts:
            1. MySQL Server (Currently selected; mysql-5.6) hit enter
            2. Select mysql-5.7, hit enter
            3. "ok" at the bottom, hit enter
    - `sudo apt-get update`
    - `sudo apt-get install mysql-server`
        - "y" at prompt
        - "y" at prompt

# Install Tweepy
24. - `wget "https://bootstrap.pypa.io/get-pip.py"`
    - `sudo python get-pip.py`
    - `sudo pip install Tweepy`

# Optional: Modify .vimrc
25. The Ultimate vimrc
    - There are 2 options within the ultimate vimrc: the 'Awesome Version' and the 'Basic Version'. The awesome version includes plugins and colors, the basic does not.
    - Awesome Version:
        - `git clone https://github.com/amix/vimrc.git ~/.vim_runtime`
        - `sh ~/.vim_runtime/install_awesome_vimrc.sh`
    - Basic Version:
        - `git clone git://github.com/amix/vimrc.git ~/.vim_runtime`
        - `sh ~/.vim_runtime/install_basic_vimrc.sh`
    - For either version, to add line numbers do
        - `vim ~/.vim_runtim/vimrcs/basic.vim`
        - And add "set number" to the file. I added it after line 142.


