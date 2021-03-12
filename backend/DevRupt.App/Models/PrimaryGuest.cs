﻿using System;

namespace DevRupt.App.Models
{
    public class PrimaryGuest
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public Address Address { get; set; }

        public string NationalityCountryCode { get; set; }

        public DateTime BirthDate{ get; set; }

        public string Gender { get; set; }

        public string BirthPlace { get; set; }

        public string PreferredLanguage { get; set; }


    }
}