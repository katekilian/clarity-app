$(document).ready(function() {
  $("#form-unsatisfied").addClass("active");
  $("#form-satisfied").removeClass("active");
  $(".cs-unsatisfied").show();
  $(".cs-satisfied").hide();
  $("#nvc-statement-education").hide();

  $(document).on('click', "#form-satisfied", function() {
    $(this).addClass("active");
    $("#form-unsatisfied").removeClass("active");
    $(".cs-satisfied").show();
    $(".cs-unsatisfied").hide();
  });

  $(document).on('click', "#form-unsatisfied", function() {
    $(this).addClass("active");
    $("#form-satisfied").removeClass("active");
    $(".cs-satisfied").hide();
    $(".cs-unsatisfied").show();
  });

  $("#nvc-statement-info").on('click', function() {
    $("#nvc-statement-education").slideToggle('slow');
  });

  $(document).on('click', "#new-statement", function(e) {
    e.preventDefault();
    $(".final-statement-input:last").append(
      '<div class="horizontal-rule"></div>\
\
      <div class="form-group">\
        <div class="row">\
          <label class="col-md-2 control-label" for="journal_entry_statements_attributes_0_observation">When I notice</label>\
          <div class="col-md-10">\
            <input class="form-control" type="text" name="journal_entry[statements_attributes][0][observation]" id="journal_entry_statements_attributes_0_observation">\
          </div>\
        </div>\
      </div>\
\
      <div class="form-group">\
        <div class="row cs-satisfied">\
          <label class="col-md-2 control-label" for="journal_entry_statements_attributes_0_satisfied_feeling_id">I feel</label>\
          <div class="col-md-3">\
            <select class="form-control" name="journal_entry[statements_attributes][0][satisfied_feeling_id]" id="journal_entry_statements_attributes_0_satisfied_feeling_id">\
              <option value="1">absorbed</option>\
              <option value="2">affectionate</option>\
              <option value="3">alert</option>\
              <option value="4">amazed</option>\
              <option value="5">amazed</option>\
              <option value="6">amused</option>\
              <option value="7">animated</option>\
              <option value="8">appreciative</option>\
              <option value="9">ardent</option>\
              <option value="10">aroused</option>\
              <option value="11">astonished</option>\
              <option value="12">awed</option>\
              <option value="13">blissful</option>\
              <option value="14">calm</option>\
              <option value="15">centered</option>\
              <option value="16">clear-headed</option>\
              <option value="17">comfortable</option>\
              <option value="18">compassionate</option>\
              <option value="19">confident</option>\
              <option value="20">content</option>\
              <option value="21">curious</option>\
              <option value="22">dazzled</option>\
              <option value="23">delighted</option>\
              <option value="24">eager</option>\
              <option value="25">ecstatic</option>\
              <option value="26">elated</option>\
              <option value="27">empowered</option>\
              <option value="28">enchanted</option>\
              <option value="29">encouraged</option>\
              <option value="30">energetic</option>\
              <option value="31">engaged</option>\
              <option value="32">engrossed</option>\
              <option value="33">enlivened</option>\
              <option value="34">enthralled</option>\
              <option value="35">enthusiastic</option>\
              <option value="36">entranced</option>\
              <option value="37">equanimous</option>\
              <option value="38">excited</option>\
              <option value="39">exhilarated</option>\
              <option value="40">expectant</option>\
              <option value="41">exuberant</option>\
              <option value="42">fascinated</option>\
              <option value="43">friendly</option>\
              <option value="44">fulfilled</option>\
              <option value="45">giddy</option>\
              <option value="46">glad</option>\
              <option value="47">grateful</option>\
              <option value="48">happy</option>\
              <option value="49">hopeful</option>\
              <option value="50">inspired</option>\
              <option value="51">interested</option>\
              <option value="52">intrigued</option>\
              <option value="53">invigorated</option>\
              <option value="54">involved</option>\
              <option value="55">joyful</option>\
              <option value="56">jubilant</option>\
              <option value="57">lively</option>\
              <option value="58">loving</option>\
              <option value="59">mellow</option>\
              <option value="60">moved</option>\
              <option value="61">open</option>\
              <option value="62">open-hearted</option>\
              <option value="63">optimistic</option>\
              <option value="64">passionate</option>\
              <option value="65">peaceful</option>\
              <option value="66">pleased</option>\
              <option value="67">proud</option>\
              <option value="68">quiet</option>\
              <option value="69">radiant</option>\
              <option value="70">rapturous</option>\
              <option value="71">refreshed</option>\
              <option value="72">rejuvenated</option>\
              <option value="73">relaxed</option>\
              <option value="74">relieved</option>\
              <option value="75">renewed</option>\
              <option value="76">rested</option>\
              <option value="77">restored</option>\
              <option value="78">revived</option>\
              <option value="79">safe</option>\
              <option value="80">satisfied</option>\
              <option value="81">secure</option>\
              <option value="82">serene</option>\
              <option value="83">spellbound</option>\
              <option value="84">still</option>\
              <option value="85">stimulated</option>\
              <option value="86">surprised</option>\
              <option value="87">sympathetic</option>\
              <option value="88">tender</option>\
              <option value="89">thankful</option>\
              <option value="90">thrilled</option>\
              <option value="91">tickled</option>\
              <option value="92">touched</option>\
              <option value="93">tranquil</option>\
              <option value="94">trusting</option>\
              <option value="95">vibrant</option>\
              <option value="96">warm</option>\
              <option value="97">wonder</option>\
            </select>\
          </div>\
        </div>\
      </div>\
\
      <div class="form-group">\
        <div class="row cs-unsatisfied">\
          <label class="col-md-2 control-label" for="journal_entry_statements_attributes_0_unsatisfied_feeling_id">I feel</label>\
          <div class="col-md-3">\
            <select class="form-control" name="journal_entry[statements_attributes][0][unsatisfied_feeling_id]" id="journal_entry_statements_attributes_0_unsatisfied_feeling_id">\
              <option value="1">aggravated</option>\
              <option value="2">agitated</option>\
              <option value="3">agony</option>\
              <option value="4">alarmed</option>\
              <option value="5">alienated</option>\
              <option value="6">aloof</option>\
              <option value="7">ambivalent</option>\
              <option value="8">angry</option>\
              <option value="9">anguished</option>\
              <option value="10">animosity</option>\
              <option value="11">anxious</option>\
              <option value="12">apathetic</option>\
              <option value="13">appalled</option>\
              <option value="14">apprehensive</option>\
              <option value="15">ashamed</option>\
              <option value="16">baffled</option>\
              <option value="17">beat</option>\
              <option value="18">bereaved</option>\
              <option value="19">bewildered</option>\
              <option value="20">bored</option>\
              <option value="21">burnt out</option>\
              <option value="22">chagrined</option>\
              <option value="23">cold</option>\
              <option value="24">confused</option>\
              <option value="25">contempt</option>\
              <option value="26">cranky</option>\
              <option value="27">dazed</option>\
              <option value="28">dejected</option>\
              <option value="29">depleted</option>\
              <option value="30">depressed</option>\
              <option value="31">despair</option>\
              <option value="32">despondent</option>\
              <option value="33">detached</option>\
              <option value="34">devastated</option>\
              <option value="35">discombobulated</option>\
              <option value="36">disconcerted</option>\
              <option value="37">disconnected</option>\
              <option value="38">discouraged</option>\
              <option value="39">disgruntled</option>\
              <option value="40">disgusted</option>\
              <option value="41">disheartened</option>\
              <option value="42">dislike</option>\
              <option value="43">dismayed</option>\
              <option value="44">displeased</option>\
              <option value="45">dissapointed</option>\
              <option value="46">distant</option>\
              <option value="47">distracted</option>\
              <option value="48">distraught</option>\
              <option value="49">distressed</option>\
              <option value="50">disturbed</option>\
              <option value="51">dread</option>\
              <option value="52">edgy</option>\
              <option value="53">embarrased</option>\
              <option value="54">enraged</option>\
              <option value="55">envious</option>\
              <option value="56">exasperated</option>\
              <option value="57">exhausted</option>\
              <option value="58">fidgety</option>\
              <option value="59">flustered</option>\
              <option value="60">foreboding</option>\
              <option value="61">forlorn</option>\
              <option value="62">fragile</option>\
              <option value="63">frazzled</option>\
              <option value="64">frightened</option>\
              <option value="65">frustrated</option>\
              <option value="66">furious</option>\
              <option value="67">gloomy</option>\
              <option value="68">grief</option>\
              <option value="69">guarded</option>\
              <option value="70">guilty</option>\
              <option value="71">hate</option>\
              <option value="72">heartbroken</option>\
              <option value="73">heavy hearted</option>\
              <option value="74">helpless</option>\
              <option value="75">hesitant</option>\
              <option value="76">hopeless</option>\
              <option value="77">horrified</option>\
              <option value="78">hostile</option>\
              <option value="79">hurt</option>\
              <option value="80">impatient</option>\
              <option value="81">incensed</option>\
              <option value="82">indifferent</option>\
              <option value="83">indignant</option>\
              <option value="84">insecure</option>\
              <option value="85">irate</option>\
              <option value="86">irked</option>\
              <option value="87">irritable</option>\
              <option value="88">irritated</option>\
              <option value="89">jealous</option>\
              <option value="90">jittery</option>\
              <option value="91">leery</option>\
              <option value="92">lethargic</option>\
              <option value="93">listless</option>\
              <option value="94">livid </option>\
              <option value="95">lonely</option>\
              <option value="96">longing</option>\
              <option value="97">lost</option>\
              <option value="98">melancholy</option>\
              <option value="99">miserable</option>\
              <option value="100">mistrustful</option>\
              <option value="101">mortified</option>\
              <option value="102">mystified</option>\
              <option value="103">nervous</option>\
              <option value="104">nostalgic</option>\
              <option value="105">numb</option>\
              <option value="106">outraged</option>\
              <option value="107">overwhelmed</option>\
              <option value="108">panicked</option>\
              <option value="109">perplexed</option>\
              <option value="110">perturbed</option>\
              <option value="111">petrified</option>\
              <option value="112">pining</option>\
              <option value="113">puzzled</option>\
              <option value="114">rattled</option>\
              <option value="115">regretful</option>\
              <option value="116">remorseful</option>\
              <option value="117">removed</option>\
              <option value="118">repulsed</option>\
              <option value="119">resentful</option>\
              <option value="120">reserved</option>\
              <option value="121">restless</option>\
              <option value="122">restless</option>\
              <option value="123">sad</option>\
              <option value="124">scared</option>\
              <option value="125">self-conscious</option>\
              <option value="126">sensitive</option>\
              <option value="127">shaky</option>\
              <option value="128">shocked</option>\
              <option value="129">sleepy</option>\
              <option value="130">startled</option>\
              <option value="131">stressed out</option>\
              <option value="132">surprised</option>\
              <option value="133">suspicious</option>\
              <option value="134">tense</option>\
              <option value="135">terrified</option>\
              <option value="136">tired</option>\
              <option value="137">torn</option>\
              <option value="138">troubled</option>\
              <option value="139">turbulent</option>\
              <option value="140">turmoil</option>\
              <option value="141">uncomfortable</option>\
              <option value="142">uneasy</option>\
              <option value="143">unhappy</option>\
              <option value="144">uninterested</option>\
              <option value="145">unnerved</option>\
              <option value="146">unsettled</option>\
              <option value="147">upset</option>\
              <option value="148">vulnerable</option>\
              <option value="149">wary</option>\
              <option value="150">weary</option>\
              <option value="151">wisful</option>\
              <option value="152">withdrawn</option>\
              <option value="153">worn out</option>\
              <option value="154">worried</option>\
              <option value="155">wretched</option>\
            </select>\
          </div>\
        </div>\
      </div>\
\
      <div class="form-group">\
        <div class="row">\
          <label class="col-md-2 control-label" for="journal_entry_statements_attributes_0_need_id">because I need</label>\
          <div class="col-md-3">\
            <select class="form-control" name="journal_entry[statements_attributes][0][need_id]" id="journal_entry_statements_attributes_0_need_id">\
              <option value="1">acceptance</option>\
              <option value="2">affection</option>\
              <option value="3">air</option>\
              <option value="4">appreciation</option>\
              <option value="5">authenticity</option>\
              <option value="6">awareness</option>\
              <option value="7">beauty</option>\
              <option value="8">belonging</option>\
              <option value="9">celebration of life</option>\
              <option value="10">challenge</option>\
              <option value="11">choice</option>\
              <option value="12">clarity</option>\
              <option value="13">communion</option>\
              <option value="14">community</option>\
              <option value="15">companionship</option>\
              <option value="16">compassion</option>\
              <option value="17">competence</option>\
              <option value="18">consciousness</option>\
              <option value="19">consideration</option>\
              <option value="20">consistency</option>\
              <option value="21">contribution</option>\
              <option value="22">cooperation</option>\
              <option value="23">creativity</option>\
              <option value="24">discovery</option>\
              <option value="25">ease</option>\
              <option value="26">effectiveness</option>\
              <option value="27">efficacy</option>\
              <option value="28">empathy</option>\
              <option value="29">equality</option>\
              <option value="30">food</option>\
              <option value="31">freedom</option>\
              <option value="32">growth</option>\
              <option value="33">harmony</option>\
              <option value="34">honesty</option>\
              <option value="35">hope</option>\
              <option value="36">humor</option>\
              <option value="37">inclusion</option>\
              <option value="38">independence</option>\
              <option value="39">inspiration</option>\
              <option value="40">intimacy</option>\
              <option value="41">joy</option>\
              <option value="42">learning</option>\
              <option value="43">love</option>\
              <option value="44">mourning</option>\
              <option value="45">movement/exercise</option>\
              <option value="46">mutuality</option>\
              <option value="47">nurturing</option>\
              <option value="48">order</option>\
              <option value="49">participation</option>\
              <option value="50">physical safety</option>\
              <option value="51">presence</option>\
              <option value="52">purpose</option>\
              <option value="53">respect</option>\
              <option value="54">rest/sleep</option>\
              <option value="55">safety</option>\
              <option value="56">security</option>\
              <option value="57">self-expression</option>\
              <option value="58">self-respect</option>\
              <option value="59">sexual expression</option>\
              <option value="60">shelter</option>\
              <option value="61">space</option>\
              <option value="62">spontaneity</option>\
              <option value="63">stability</option>\
              <option value="64">stimulation</option>\
              <option value="65">support</option>\
              <option value="66">to be known</option>\
              <option value="67">to be seen</option>\
              <option value="68">to be understood</option>\
              <option value="69">to know</option>\
              <option value="70">to matter</option>\
              <option value="71">to see</option>\
              <option value="72">to understand</option>\
              <option value="73">touch</option>\
              <option value="74">trust</option>\
              <option value="75">understanding</option>\
              <option value="76">warmth</option>\
              <option value="77">water</option>\
            </select>\
          </div>\
        </div>\
      </div>\
\
      <div class="form-group final-statement-input">\
        <div class="row">\
          <label class="col-md-2 control-label" for="journal_entry_statements_attributes_0_request">Would you be willing to...?</label>\
          <div class="col-md-10">\
            <textarea class="form-control" name="journal_entry[statements_attributes][0][request]" id="journal_entry_statements_attributes_0_request"></textarea>\
          </div>\
        </div>\
      </div>'
    );
    if ($("#form-unsatisfied").hasClass("active")) {
      $(".cs-satisfied").hide();
      $(".cs-unsatisfied").show();
    } else {
      $(".cs-unsatisfied").hide();
      $(".cs-satisfied").show();
    }
  });
});
