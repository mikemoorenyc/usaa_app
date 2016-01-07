<?php
/**
 * Template Name: Base Template Page
 */
?>


<?php include 'header.php'; ?>



<header>
  <img id="logo" src="" alt="USAA Real Estate"/>

</header>

<div id="map">



</div>

<nav>
  <ul id="core-toggles" class="no-style">
    <li class="core active" data-type="core"><a href="#">Core</a></li>

    <li class="non-core active" data-type="noncore"><a href="#">Non-Core</a></li>

  </ul>

  <ul id="type-toggles" class="no-style">
    <li class="all active" data-type="all"><a href="#">View All</a></li>

    <li class="industrial" data-type="industrial"><a href="#">Industrial</a></li>

    <li class="retail " data-type="retail"><a href="#">Retail</a></li>

    <li class="multifamily" data-type="multifamily"><a href="#">Multifamily</a></li>

  </ul>


</nav>


<div id="detail-container" style="display:none; position: absolute; left: 0; top: 0; background:white;">


</div>


<?php include 'footer.php'; ?>
