# wilsonAttendance

I made this program to collect the MAC address of a device on a local network on form submission.

Storing this MAC means that a user can search a local network to see if a specific device is connected to the router without knowing the IP.

The goal of this program was to get teachers to perform an initial sign-in, where the details of their phone would be recorded. Running an nmap scan would provide a list of which teachers had connected to the school WiFi.

* arping -c 1 192.168.x.x to get initial MAC
* Use nmap -sn to scan for MAC?
