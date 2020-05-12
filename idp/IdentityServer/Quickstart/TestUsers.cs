// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServer
{
    public class TestUsers
    {
        public static List<TestUser> Users()
        {
            var result = UserList;

            foreach(var user in result)
            {
                foreach(var claim in AllRights)
                {
                    user.Claims.Add(claim);
                }
            }

            return result;
        }

        public static List<TestUser> UserList = new List<TestUser>
        {
            new TestUser{SubjectId = "postmantestclient", Username = "postmantestclient", Password = "postman",
                Claims =
                {
                    new Claim(JwtClaimTypes.Name, "Postman Client"),
                    new Claim(JwtClaimTypes.GivenName, "Postman"),
                    new Claim(JwtClaimTypes.FamilyName, "Client"),
                    new Claim(JwtClaimTypes.Role, "seagoingservice"),
                },
            },
            new TestUser{SubjectId = "29037402298", Username = "hilde", Password = "altinn",
                Claims =
                {
                    new Claim(JwtClaimTypes.Name, "Hilde Lygre"),
                    new Claim(JwtClaimTypes.GivenName, "Hilde"),
                    new Claim(JwtClaimTypes.FamilyName, "Lygre"),
                }
            },
            new TestUser{SubjectId = "818727", Username = "alice", Password = "alice", 
                Claims = 
                {
                    new Claim(JwtClaimTypes.Name, "Alice Smith"),
                    new Claim(JwtClaimTypes.GivenName, "Alice"),
                    new Claim(JwtClaimTypes.FamilyName, "Smith"),
                    new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                    new Claim(JwtClaimTypes.Address, @"{ 'street_address': 'One Hacker Way', 'locality': 'Heidelberg', 'postal_code': 69118, 'country': 'Germany' }", IdentityServer4.IdentityServerConstants.ClaimValueTypes.Json)
                }
            },
            new TestUser{SubjectId = "88421113", Username = "bob", Password = "bob", 
                Claims = 
                {
                    new Claim(JwtClaimTypes.Name, "Bob Smith"),
                    new Claim(JwtClaimTypes.GivenName, "Bob"),
                    new Claim(JwtClaimTypes.FamilyName, "Smith"),
                    new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                    new Claim(JwtClaimTypes.Address, @"{ 'street_address': 'One Hacker Way', 'locality': 'Heidelberg', 'postal_code': 69118, 'country': 'Germany' }", IdentityServer4.IdentityServerConstants.ClaimValueTypes.Json),
                    new Claim("location", "somewhere")
                }
            }
        };

        public static ICollection<Claim> AllRights = new List<Claim>
        {
                new Claim("SeagointService_AddServiceReport","AddServiceReport"),
                new Claim("SeagointService_ReadServiceReport","ReadServiceReport"),
                new Claim("SeagointService_UpdateServiceReport","UpdateServiceReport"),
                new Claim("SeagointService_DeleteServiceReport","DeleteServiceReport"),
        };

    }
}