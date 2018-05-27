/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 *
 * @author: pdulvp@gmail.com
 */

 //Update the comment according to status and resolution fields
 var updateComment = function () {
    var value = "";
    var status = document.getElementById("bug_status");
    var resolution = document.getElementById("resolution");
    
    if (status != undefined && status.value.length>0) {
      value+= "Status: " + status.value.toLowerCase();
    }
    if (resolution != undefined && resolution.value.length>0) {
      value+= "\nResolution: " + resolution.value.toLowerCase();
    }
    
    document.getElementById("comment").textContent = value;
 }

 var status = document.getElementById("bug_status");
 if (status != undefined) {
   status.addEventListener("change", updateComment);
 }

 var resolution = document.getElementById("resolution");
 if (resolution != undefined) {
   resolution.addEventListener("change", updateComment);
 }
