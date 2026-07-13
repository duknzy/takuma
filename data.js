const rawData = `
 follow: ～の後に続く、～に従う、～を追いかける、～を理解する｜follow the rules｜規則に従う
consider: ～を考慮する、～を（…だと）見なす、～をよく考える｜consider the problem｜問題を考慮する
increase: 増える、～を増やす、増加｜increase the speed｜速度を増やす
expect: ～を予期する、～を期待する、～が（…するだろうと）思う｜expect good results｜良い結果を予期する
decide: ～することを決意する、～を決定する｜decide to go｜行くことを決意する
develop: 発達する、～を発達させる、～を開発する、（病気）にかかる｜develop a plan｜計画を発達させる
provide: ～を供給する、与える、～に備える｜provide information｜情報を供給する
continue: 続く、～を続ける｜continue to work｜働き続ける
include: ～を含む、含める｜include tax｜税を含める
remain: ～のままでいる、残る、とどまる｜remain silent｜静かなままでいる
reach: ～に着く、～に達する、手を伸ばす｜reach the top｜頂上に達する
allow: ～を許可する、～が（…するのを）許す、～を与える｜allow him to go｜彼が行くのを許可する
force: ～を強制する、力、暴力、軍隊｜force him to work｜彼に働くことを強制する
offer: ～を申し出る、～を提供する、申し出｜offer help｜助けを申し出る
realize: ～を悟る、～に気づく、～を実現する｜realize the truth｜真実を悟る
suggest: ～と提案する、～をほのめかす、～を暗示する｜suggest a new idea｜新しい考えを提案する
require: ～を必要とする、～を要求する｜require attention｜注意を必要とする
worry: 心配する、～を心配させる、心配｜worry about money｜お金を心配する
wonder: ～かと疑問に思う、不思議に思う、驚き、驚異｜wonder why it happened｜なぜ起きたのかと疑問に思う
cost: （費用）を要する、（犠牲）を払わせる、費用、犠牲｜cost 10 dollars｜10ドルを要する
tend: ～する傾向がある、～しがちである、（植物や病人）の世話をする｜tend to forget｜忘れる傾向がある
depend: ～に依存する、～しだいで決まる、～を頼りにする｜depend on him｜彼に依存する
share: ～を分け合う、共有する、割り当て、分け前、株｜share a room｜部屋を共有する
demand: ～を要求する、～を必要とする、要求、需要｜demand an apology｜謝罪を要求する
support: ～を支持する、～を養う、～を立証する、支持｜support the team｜チームを支持する
hire: ～を雇う、（車など）を一時的に賃借りする｜hire a lawyer｜弁護士を雇う
regard: AをBだと思う、見なす、～を評価する、配慮、尊敬｜regard him as a friend｜彼を友達だとみなす
base: AをBの基礎［根拠］に置く、基礎、土台、基地｜base the story on a fact｜話を事実に基づかせる
improve: ～を向上させる、よくなる｜improve quality｜質を向上させる
recognize: ～を認める、～を（見）覚えている、～を認識する｜recognize his face｜彼の顔を認める
notice: ～に気づく、～に注目する、通知、掲示、注目｜notice the difference｜違いに気づく
suppose: ～だと思う、～だと仮定する｜suppose he is right｜彼は正しいと思う
raise: ～を上げる、～を育てる、（資金）を集める、（問題）を提起する｜raise my hand｜手を上げる
prefer: ～を（…より）好む｜prefer coffee to tea｜紅茶よりコーヒーをより好む
cheer: ～を励ます、～を応援する、歓声｜cheer him up｜彼を励ます
suffer: ～を経験する、受ける、（病気などで）苦しむ｜suffer from a cold｜風邪で苦しむ
describe: ～を描写する、～の特徴を説明する｜describe the scene｜その場面を描写する
prevent: ～をさまたげる、～を防ぐ｜prevent an accident｜事故をさまたげる
reduce: ～を減らす、～を（…の働きに）変える｜reduce the cost｜費用を減らす
mistake: ～を誤解する、間違える、間違い｜mistake him for someone else｜彼を他の誰かとまちがえる
prepare: ～の準備をする、～に備える｜prepare for the exam｜試験の準備をする
encourage: ～を励ます、～を勇気づける、～を促進する｜encourage him to try｜彼に挑戦するようはげます
prove: ～だとわかる、～を証明する｜prove to be true｜本当だとわかる
treat: ～をあつかう、～を治療する、～におごる、もてなし｜treat him well｜彼をよくあつかう
establish: ～を設立する、創立する、～を確立する｜establish a company｜会社を設立する
relate: 関係がある、～を関連づける、～を話す｜relate to the problem｜問題に関係がある
compare: ～を比較する、～をたとえる｜compare the two｜2つを比較する
spread: ～を広げる、広がる、広がり｜spread a rumor｜うわさを広げる
refer: ～を指示する、～に言及する、～を参照する｜refer to the dictionary｜辞書を指示する（参照する）
supply: ～を供給する、供給、必需品｜supply water｜水を供給する
gain: ～を得る、～を増す、利益｜gain experience｜経験を得る
destroy: ～を破壊する、～を滅ぼす｜destroy the building｜建物を破壊する
apply: 当てはまる、～を応用する、申し込む｜apply for a job｜仕事に申し込む
seek: ～を求める、～を探し求める｜seek help｜助けを求める
search: ～を捜す、～を探求する、捜索｜search the room｜部屋を捜す
claim: ～と主張する、～を要求する、主張、要求｜claim that it is true｜それは本当だと主張する
draw: ～を引っぱる、～を描く、（注意）を引く｜draw a curtain｜カーテンを引っぱる
refuse: ～を断る、～を拒む｜refuse the offer｜申し出を断る
respond: ～に返答する、～に反応する｜respond to the question｜質問に返答する
mention: ～について述べる、～に言及する｜mention the name｜名前について述べる
judge: ～を判断する、～を裁く、裁判官、審判｜judge the quality｜質を判断する
approach: ～に接近する、～に取り組む、接近、方法｜approach the goal｜目標に接近する
admit: ～を（しぶしぶ）認める、～の入場（入学）を認める｜admit a mistake｜間違いを認める
reflect: ～を反映する、～を反射する、～についてよく考える｜reflect light｜光を反射する
perform: ～を行う、～を遂行する、～を演じる、演奏する｜perform a task｜仕事を遂行する
bore: ～をうんざりさせる、穴をあける｜bore the audience｜観客をうんざりさせる
survive: 生き残る、～を生き延びる、～より長生きする｜survive the war｜戦争を生き残る
represent: ～を表す、～を象徴する、～を代表する｜represent the country｜国を表す（代表する）
argue: ～と主張する、～を議論する、言い争う｜argue with him｜彼と主張する（議論する）
grant: ～を認める、～を与える、交付金、奨学金｜grant permission｜許可を与える
indicate: ～を指し示す、～をほのめかす｜indicate the direction｜方向を指し示す
belong: 所属している、～の所有物である｜belong to a club｜クラブに所属している
acquire: ～を習得する、～を獲得する｜acquire a skill｜技能を習得する
reply: 返事をする、答える、返事｜reply to a letter｜手紙に返事をする
feed: ～にエサをやる、～を養う、エサを食べる｜feed a dog｜犬にエサをやる
escape: 逃げる、～を免れる、逃亡｜escape from prison｜刑務所から逃げる
replace: ～に取って代わる、～を取り替える｜replace the battery｜電池を取り替える
reveal: ～を明らかにする、～を暴露する｜reveal a secret｜秘密を明らかにする
surround: ～を取り囲む｜surround the house｜家を取り囲む
suit: ～に合う、～に適する、スーツ、訴訟｜suit your taste｜好みに合う
estimate: ～を推定する、～を評価する、見積もり｜estimate the cost｜費用を推定する
aim: ～をねらう、～を目指す、目的、ねらい｜aim at the target｜的をねらう
earn: ～をもうける、かせぐ、（名声など）を得る｜earn money｜お金をかせぐ
decline: 衰退する、低下する、～を（丁寧）に辞退する｜decline an invitation｜招待を辞退する
afford: ～をする余裕がある、～を与える｜afford to buy a car｜車を買う余裕がある
confuse: ～を当惑させる、～を混同する｜confuse the reader｜読者を当惑させる
graduate: 卒業する、卒業生｜graduate from high school｜高校を卒業する
vary: 変わる、さまざまである、～を変える｜vary in size｜大きさがさまざまである
remove: ～を移す、取り去る、～を解任する｜remove the dirt｜汚れを取り去る
insist: ～と主張する、言い張る｜insist on my opinion｜自分の意見を言い張る
examine: ～を調査する、～を検査する、～を試験する｜examine the data｜データを調査する
remind: AにBを思い出させる、～に気づかせる｜remind me of the past｜私に過去を思い出させる
contribute: ～に貢献する、～の一因となる、～を寄付する｜contribute to society｜社会に貢献する
warn: ～に警告する｜warn him of danger｜彼に危険を警告する
connect: ～をつなぐ、～を関連づける｜connect the cables｜ケーブルをつなぐ
match: ～に匹敵する、～に調和する、試合、好敵手｜match the color｜色に調和する
focus: 焦点を合わせる、集中する、焦点｜focus on the problem｜問題に焦点を合わせる
reject: ～を断る、～を拒絶する｜reject the plan｜計画を断る
convince: ～を納得させる、確信させる｜convince him of the truth｜彼に真実を確信させる
associate: ～を関連づける、～から連想する、交際する、仲間｜associate white with snow｜白から雪を連想する
rush: 急いで行く、急ぐ、～を急がせる、突進、慌ただしさ｜rush to the hospital｜急いで行く
stress: ～を強調する、ストレス、強調｜stress the importance｜重要性を強調する
attract: ～を引きつける、～を魅了する｜attract attention｜注意を引きつける
rely: 頼る、依存する｜rely on him｜彼に頼る
regret: ～を後悔する、～を残念に思う、後悔、遺憾｜regret the decision｜決定を後悔する
adopt: ～を採用する、～を養子にする｜adopt a new method｜新しい方法を採用する
shake: ～を振る、揺れる、震える｜shake my head｜頭を振る
hurt: ～を傷つける、痛む｜hurt my back｜背中を傷つける
operate: ～を操作する、作動する、手術する｜operate a machine｜機械を操作する
extend: ～を延長する、～を広げる、伸びる｜extend the deadline｜締め切りを延長する
blame: ～を非難する、～のせいにする｜blame him for the failure｜失敗を彼のせいにする
consist: （～から）成る、（～に）本質がある｜consist of three parts｜3つの部分で構成されている
persuade: ～を説得する、～に確信させる｜persuade her to go｜彼女に行くよう説得する
admire: ～に感嘆する、～を称賛する｜admire his courage｜彼の勇気に感心する
disappoint: ～を失望させる｜disappoint the fans｜ファンを失望させる
expand: ～を拡大する、広がる、膨張する｜expand the business｜ビジネスを拡大する
preserve: ～を保護する、～を保存する｜preserve nature｜自然を保護する
struggle: 苦闘する、もがく、苦闘、努力｜struggle to survive｜生き残るためにもがく
arrange: ～の手はずを整える、～を配列する｜arrange a meeting｜会議の手はずを整える
disturb: ～を妨げる、～を不安にする｜disturb his sleep｜彼の睡眠を妨げる
employ: ～を雇う、～を用いる｜employ a new strategy｜新しい戦略を用いる
engage: （～に）従事する、～を従事させる、～を婚約させる｜engage in a conversation｜会話に従事する
abandon: ～を捨てる、～を放棄する｜abandon the plan｜計画を捨てる
display: ～を展示する、～を表す、展示｜display the artwork｜芸術作品を展示する
encounter: ～に（偶然）出会う、～に直面する、出会い｜encounter a problem｜問題に偶然出会う
amuse: ～を楽しませる、～を笑わせる｜amuse the children｜子どもたちを楽しませる
bother: ～を悩ませる、～の邪魔をする、わざわざ～する｜bother him｜彼に面倒をかける
concentrate: 集中する、～を集中させる｜concentrate on the task｜課題に集中する
adapt: ～を適応させる、適応する、～を改作する｜adapt to a new culture｜新しい文化に適応する
puzzle: ～を当惑させる、難問、パズル｜puzzle the experts｜専門家を当惑させる
appeal: 訴える、～の心に訴える、魅力、訴え｜appeal to the public｜大衆に訴える
combine: ～を結合させる、結合する｜combine two ideas｜2つのアイデアを結合させる
delay: ～を遅らせる、遅れ｜delay the flight｜フライトを遅らせる
repair: ～を修理する、修理｜repair the car｜車を修理する
fascinate: ～を夢中にさせる、～を魅了する｜fascinate the audience｜観客を夢中にさせる
pardon: ～を許す、許し｜pardon me｜私を許す
import: ～を輸入する、輸入（品）｜import cars｜車を輸入する
remark: 述べる、発言、意見｜remark on the event｜出来事について述べる
reserve: ～を予約する、～を取っておく、蓄え、遠慮｜reserve a table｜テーブルを予約する
amaze: ～を驚嘆させる｜amaze everyone｜みんなを驚嘆させる
frighten: ～をおびえさせる、～をぞっとさせる｜frighten the cat｜猫をおびえさせる
release: ～を解放する、～を発表する、解放、発売｜release a new product｜新製品を発表する
rent: ～を賃借りする、～を賃貸しする、家賃、使用料｜rent an apartment｜アパートを賃借りする
recover: 回復する、～を取り戻す｜recover from an illness｜病気から回復する
suspect: ～ではないかと思う、～を疑う、容疑者｜suspect him of lying｜彼が嘘をついていると疑う
deliver: ～を配達する、（演説など）をする｜deliver a package｜荷物を配達する
identify: ～の正体をつきとめる、～を（…と）同一視する｜identify the cause｜原因の正体をつきとめる
locate: ～を位置づける、～の場所を見つける｜locate in Tokyo｜東京に位置する
manufacture: ～を製造する、製造｜manufacture cars｜車を製造する
occupy: ～を占める、～を占領する｜occupy the room｜部屋を占める
own: ～を所有している、自分自身の｜own a house｜家を所有している
expose: ～をさらす、～を暴露する｜expose skin to the sun｜肌を太陽にさらす
translate: ～を翻訳する、～を解釈する｜translate English into Japanese｜英語を日本語に翻訳する
cure: ～を治療する、治る、治療法｜cure the disease｜病気を治療する
perceive: ～を知覚する、～に気づく、～を理解する｜perceive the difference｜違いを知覚する
adjust: ～を調整する、～を適合させる、順応する｜adjust to a new school｜新しい学校に慣れる
alarm: ～をぎょっとさせる、警報、驚き｜alarm the residents｜住民をぎょっとさせる
assist: ～を助ける、～を手伝う｜assist with the project｜プロジェクトを手伝う
freeze: 凍る、～を凍らせる｜freeze to death｜凍りつく
spoil: ～を台無しにする、～を甘やかす｜spoil the party｜パーティーを台無しにする
shift: ～を変える、移す、変化、交替｜shift the focus｜焦点を変える
embarrass: ～を困惑させる、～に恥ずかしい思いをさせる｜embarrass her｜彼女を困惑させる
approve: ～を承認する、賛成する｜approve the plan｜計画を承認する
weigh: ～の重さを量る、～を比較検討する、重さがある｜weigh the options｜選択肢を比較検討する
stretch: ～を広げる、伸ばす、広がる、伸びる｜stretch my arms｜腕を広げる
participate: 参加する｜participate in the event｜イベントに参加する
exhibit: ～を展示する、～を示す、展示物｜exhibit the paintings｜絵を展示する
owe: ～を借りている、～に恩恵がある｜owe my success to him｜私の成功は彼のおかげだ
celebrate: ～を祝う、（儀式など）を行う｜celebrate my birthday｜私の誕生日を祝う
decorate: ～を装飾する｜decorate the room｜部屋を装飾する
forgive: ～を許す｜forgive his mistake｜彼のミスを許す
seat: ～を座らせる、～を収容する、座席｜be seated on the chair｜椅子に座っている
injure: ～を傷つける、～にけがをさせる｜injure my leg｜私の脚を傷つける
sew: ～を縫う｜sew a dress｜ドレスを縫う
result: 結果、終わる、結果として生じる｜a good result｜結果
feature: 特徴、顔つき、特集記事、～を特徴づける、主役にする｜a unique feature｜特徴
society: 社会、協会、交際｜human society｜人間社会
wheel: 車輪、ハンドル｜a steering wheel｜ハンドル
value: 価値、価値観、～を評価する、～を重んじる｜true value｜本当の価値
effect: 効果、影響、結果｜a positive effect｜良い効果
individual: 個人、個々の、個人の｜respect the individual｜個人を尊重する
influence: 影響、影響力、～に影響を与える｜have an influence on him｜彼に影響を与える
fee: 料金、謝礼、入会金｜pay a fee｜料金を払う
rate: 割合、速度、料金、～を評価する｜a high rate｜高い割合
sign: 兆候、しるし、標識、～に署名する｜a sign of spring｜春の兆候
service: サービス、業務、奉仕、公共事業｜bus service｜バスの業務
advance: 前進、進歩、前進する、～を前進させる｜advance in technology｜技術の進歩
laughter: 笑い、笑い声｜burst into laughter｜笑い出す
material: 物質、材料、資料、物質的な｜raw material｜原材料（物質）
industry: 産業、工業、勤勉｜the car industry｜自動車工業
attempt: 試み、～を試みる｜make an attempt｜試みをする
trade: 貿易、商売、職業、貿易する｜international trade｜国際貿易
progress: 進歩、前進、進歩する｜make progress｜進歩する
excuse: 言い訳、～を許す、～を免除する｜make an excuse｜言い訳をする
custom: 習慣、税関、（～sで）関税｜a local custom｜地元の習慣
passage: 一節、経過、通行、通路｜read a passage｜一節を読む
economy: 経済、節約｜the global economy｜世界経済
track: 小道、足跡、軌道、～の跡をたどる｜a narrow track｜狭い小道
transportation: 交通機関、輸送｜public transportation｜公共交通機関
official: 役人、公務員、公式の｜a government official｜政府の役人
sight: 視力、光景、見ること、名所｜a beautiful sight｜美しい光景
taste: 味、好み、センス、～の味がする、～を味見する｜a good taste｜良い味
range: 範囲、並び、及ぶ、広がる｜a wide range of...｜広い範囲の...
appointment: （面会などの）約束、予約、任命｜make an appointment｜約束（予約）をする
patient: 患者、忍耐強い｜a hospital patient｜病院の患者
project: 計画、事業、～を計画する、～を見積もる、～を投影する｜a new project｜新しい計画
favor: 好意、親切な行為、支持、～に賛成する｜ask a favor｜好意を求める
appearance: 外見、様子、出現｜his outward appearance｜彼の外見
risk: 危険（性）、恐れ、～を危険にさらす｜take a risk｜危険を冒す
benefit: 利益、恩恵、利益を得る、～に利益を与える｜health benefits｜健康の利益
resident: 住民、滞在者、住んでいる｜a local resident｜地元の住民
relative: 親戚、相対的な、比較上の｜a close relative｜近い親戚
region: 地域、地方、領域｜a large region｜広い地域
characteristic: 特徴、特色、特有の｜a main characteristic｜主な特徴
pain: 痛み、苦痛、（～sで）骨折り、苦労｜feel pain｜苦痛を感じる
twin: 双子の一方、双生児、双子の｜a twin brother｜双子の一方（双生児）の兄弟
occasion: 場合、機会、行事｜on this occasion｜この場合に
principle: 原理、原則、主義、信念｜a basic principle｜基本的な原理
department: 部門、学科、省、売り場｜the sales department｜営業部門
duty: 義務、職務、関税｜do one's duty｜義務を果たす
scene: 場面、現場、景色、光景｜the scene of the accident｜事故の現場
jam: 渋滞、ジャム、～を詰め込む｜a traffic jam｜交通渋滞
spirit: 精神、霊、気分、気力｜the spirit of the law｜法の精神
medium: 手段、媒体、中間の｜a medium of communication｜情報伝達の手段
mass: 一般大衆、多くの～、かたまり、質量｜the mass of the people｜一般大衆
audience: （劇場などの）観客、聴衆｜a large audience｜大勢の聴衆
element: 要素、元素、自然の力｜a key element｜重要な要素
climate: 気候、風潮｜a mild climate｜温暖な気候
revolution: 革命、回転｜the French Revolution｜フランス革命
quarter: 4分の1、15分、地域｜a quarter of an hour｜1時間の4分の1
furniture: 家具｜wooden furniture｜木製の家具
brain: 脳、頭脳、優秀な人｜the human brain｜人間の脳
atmosphere: 大気、雰囲気｜a friendly atmosphere｜友好的な雰囲気
property: 財産、所有物、不動産、特性｜personal property｜個人の財産
reward: 報酬、ほうび、～に報いる｜give a reward｜報酬を与える
security: 安全、防衛、警備｜national security｜国家の安全
delight: 大喜び、～を大喜びさせる、喜ぶ｜with great delight｜大喜びで
desert: 砂漠、～を見捨てる｜the Sahara Desert｜サハラ砂漠
background: 背景、生い立ち、経歴｜a cultural background｜文化的な背景
trend: 傾向、流行｜a new trend｜新しい傾向
vote: 投票、選挙権、投票する｜get a vote｜投票を得る
impact: 影響、衝撃、衝突｜have an impact on...｜...に影響を与える
institution: 機関、施設、制度、慣習｜a financial institution｜金融機関
interaction: 交流、相互作用｜social interaction｜社会的な交流
alternative: 代わりのもの、選択肢、代わりの｜an alternative plan｜代わりのもの（代案）
harm: 害、危害、～を害する｜cause harm｜害を引き起こす
agency: （政府などの）機関、代理店｜a travel agency｜旅行代理店
capacity: 能力、収容力、容積｜the capacity to learn｜学ぶ能力
minister: 大臣、牧師｜the prime minister｜総理大臣
volunteer: ボランティア、志願者、進んで～する｜a student volunteer｜学生ボランティア
access: 利用する権利、接近、～にアクセスする｜have access to the Internet｜インターネットを利用する権利がある
quantity: 量｜a large quantity of...｜大量の...
branch: 枝、支店、部門｜a branch of the bank｜銀行の支店
common: 共通の、普通の、一般の｜a common language｜共通の言語
rough: ざらざらした、大雑把な、荒っぽい｜a rough estimate｜大雑把な見積もり
likely: ありそうな、～しそうで、たぶん｜be likely to rain｜雨が降る可能性が高い
serious: 深刻な、真面目な、本気の｜a serious problem｜深刻な問題
particular: 特有の、特定の、好みがうるさい｜a particular reason｜ある特定の理由
available: 手に入る、利用できる、手が空いている｜tickets are available｜チケットが手に入る
bilingual: 2か国語を話す、2か国語使用者｜a bilingual speaker｜二言語使用の話者
ready: 用意ができて、進んで～する｜be ready to go｜行く用意ができた
correct: 正しい、～を訂正する｜the correct answer｜正しい答え
familiar: 熟知している、よく知られている、親しい｜be familiar with it｜それを熟知している
physical: 身体の、肉体の、物理的な｜physical strength｜肉体の力
worth: ～の価値がある、価値｜be worth visiting｜訪れる価値がある
involved: 巻き込まれた、関与した、複雑な｜be involved in the project｜計画に関係している
fantastic: すばらしい、空想的な｜a fantastic idea｜すばらしいアイデア
private: 個人の、私的な、秘密の｜private property｜個人の（私的な）財産
obvious: 明白な、明らかな｜an obvious mistake｜明白な間違い
native: 母国の、その土地（国）生まれの、先住民｜my native language｜私の母国の言語
complex: 複雑な、複合体、強迫観念（コンプレックス）｜a complex system｜複雑なシステム
willing: （～するのを）いとわない、進んで～する｜be willing to help｜手伝ってもかまわない
current: 最新の、現在の、流れ、電流、風潮｜the current situation｜最新の状況
male: 男の、雄の、男性、雄｜a male worker｜男の労働者
proper: 適切な、ふさわしい、礼儀正しい｜the proper way｜適切な方法
capable: 能力がある、有能な｜be capable of doing｜～する能力がある
independent: 独立した、自立した｜an independent country｜独立した国
positive: 積極的な、前向きな、確信して、肯定的な｜a positive attitude｜積極的な態度
pleasant: 楽しい、心地よい｜a pleasant surprise｜楽しい驚き
significant: 重要な、意義深い、かなりの｜a significant difference｜重要な違い
former: 前の、昔の、（the～で）前者｜the former president｜前の大統領
chemical: 化学的な、化学物質｜a chemical reaction｜化学的な反応
upset: 動揺している、怒っている、～を動揺させる、～をひっくり返す｜feel upset｜動揺している
previous: 前の、以前の｜a previous experience｜前の経験
calm: 冷静な、穏やかな、落ち着く、～を落ち着かせる｜stay calm｜冷静なままでいる
specific: 特定の、明確な、具体的な｜a specific example｜特定の例
conscious: 意識している、意識がある｜be conscious of it｜意識している
superior: よりすぐれている、上等の、上司｜a superior product｜よりすぐれている製品
efficient: 効率がいい、有能な｜an efficient system｜効率がいいシステム
fundamental: 基本的な、根本的な、（～s）基本｜fundamental human rights｜基本的な人権
narrow: 狭い、細い、～を狭くする｜a narrow street｜狭い通り
reasonable: 理にかなった、手頃な、（人が）道理をわきまえた｜a reasonable price｜理にかなった価格
nervous: 神経質な、不安な、神経の｜feel nervous｜神経質な（不安な）
alike: 似ている、同様に｜look alike｜似ている
domestic: 国内の、家庭の、人に慣れた｜the domestic market｜国内の市場
negative: 否定の、消極的な、マイナスの｜a negative impact｜否定の影響
moral: 道徳的な、道徳の、（～sで）道徳｜moral values｜道徳的な価値観
eager: 熱望して、熱心な｜be eager to learn｜熱望している
remarkable: すばらしい、注目すべき、異常な｜a remarkable progress｜すばらしい進歩
evil: 悪い、邪悪な、悪、悪事｜an evil spirit｜悪い霊
awake: 目が覚めて、眠らずに、～を起こす、目覚める｜stay awake｜目を覚ましたままでいる
aged: 年老いた、～歳の｜aged people｜年老いた人々
anxious: 心配して、切望して｜feel anxious｜心配している
tough: 骨の折れる、たくましい、厳しい、頑丈な｜a tough job｜骨の折れる（たくましい）仕事
nuclear: 核の、原子力の｜nuclear energy｜核（原子力）エネルギー
legal: 合法の、法律の、法的な｜legal action｜合法の行動
curious: 好奇心の強い、奇妙な｜be curious about...｜...に好奇心の強い
civil: 一般市民の、国内の、礼儀正しい｜civil rights｜一般市民の権利
recent: 最近の｜recent news｜最近のニュース
senior: 先輩の、年上の、上級の、年長者｜senior students｜上級の（先輩の）学生
afterward: その後、あとで｜see you afterward｜その後で会おう
nearly: ほとんど、あやうく～しかける｜nearly impossible｜ほとんど不可能な
therefore: それゆえに、したがって｜therefore, I agree｜それゆえに私は同意する
exactly: 正確に、まさに、その通り｜exactly the same｜正確に同じ
possibly: ひょっとすると、ことによると、（canとともに用いて）どうにかして｜possibly true｜ひょっとすると本当の
contrary: 反対に、逆の、正反対｜on the contrary｜反対に
occasionally: 時々、たまに｜visit occasionally｜時々訪れる
somehow: どういうわけか、どうにかして｜somehow manage to do｜どういうわけか～する
seldom: めったに～ない｜seldom happen｜めったに起こらない
thus: そのように、したがって、このようにして｜thus it happened｜そのようにして起こった
throughout: ～の至る所に、～の間ずっと、まったく｜throughout the year｜1年を通して（いたる所に）
unlike: ～と違って、～に似ていない｜unlike him｜彼と違って
besides: ～に加えて、その上、さらに｜besides that｜それに加えて
beyond: ～を越えて、～の向こうに、～の範囲を越えて｜beyond the river｜川の向こうに
within: ～以内で、～の内部に｜within an hour｜1時間以内で
neither: どちらも～ない、～もまた（…）ない｜neither A nor B｜AもBもない
unless: ～しない限り、もし～でなければ｜unless it rains｜雨が降らない限り
except: ～を除いて｜except for me｜私を除いて
ought: （ought to doで）～すべきである、～するはずである｜ought to do｜～すべきである
spite: 悪意、（in spite of で）～にもかかわらず｜in spite of the rain｜雨にもかかわらず
whether: ～かどうか、～であろうとなかろうと｜whether it is true or not｜本当かどうか
explain: ～を説明する｜explain the rule｜ルールを説明する
accept: ～を受け入れる、～を承認する｜accept the offer｜申し出を受け入れる
produce: ～を生産する、～を引き起こす、農産物｜produce cars｜車を生産する
exist: 存在する、生存する｜exist in the world｜世界に存在する
express: ～を表現する、急行の、明白な、急行列車｜express my feelings｜私の感情を表現する
add: ～を加える、～を付け加える｜add sugar｜砂糖を加える
avoid: ～を避ける｜avoid danger｜危険を避ける
marry: ～と結婚する｜marry her｜彼女と結婚する
protect: ～を守る、～を保護する｜protect children｜子どもを守る
affect: ～に影響する、～のふりをする、（病気が）～を冒す｜affect the brain｜脳に影響する
determine: ～を決定する、～を正確に特定する、決心する｜determine the cause｜原因を決定する
solve: ～を解決する、～を解く｜solve a problem｜問題を解決する
contain: ～を含んでいる、～を抑える｜contain water｜水を含んでいる
discuss: ～を議論する、～について話し合う｜discuss the matter｜問題を議論する
ignore: ～を無視する｜ignore the rule｜規則を無視する
guess: ～を推測する、～だと思う、推測｜guess the answer｜答えを推測する
exchange: ～を交換する、両替、交換｜exchange greetings｜挨拶を交換する
satisfy: ～を満たす、～を満足させる｜satisfy needs｜必要を満たす
complain: 苦情を言う、不満を言う｜complain about the noise｜騒音について苦情を言う
achieve: ～を達成する、～を成し遂げる｜achieve a goal｜目標を達成する
enable: ～を可能にする｜enable us to go｜私達が行くのを可能にする
intend: ～するつもりである、～を意図する｜intend to go｜行くつもりだ
obtain: ～を得る、手に入れる｜obtain information｜情報を得る
divide: ～を分割する、～を分ける｜divide the cake｜ケーキを分割する
annoy: ～をいらいらさせる、～を悩ます｜annoy him｜彼をいらいらさせる
differ: 異なる、違う｜differ from each other｜お互いに異なる
educate: ～を教育する｜educate children｜子どもを教育する
borrow: ～を借りる｜borrow money｜お金を借りる
invent: ～を発明する、～をでっち上げる｜invent a machine｜機械を発明する
promote: ～を促進する、～を昇進させる｜promote sales｜販売を促進する
advise: ～に忠告する、～に助言する｜advise him to stop｜やめるよう彼に忠告する
retire: 退職する、引退する、退く｜retire from work｜仕事を辞める
permit: ～を許す、許可（証）｜permit him to go｜彼に行くのを許す
recommend: ～を勧める、～を推薦する｜recommend a book｜本を勧める
apologize: 謝る、謝罪する｜apologize to her｜彼女に謝る
inform: ～に知らせる、～に情報を提供する｜inform him of the fact｜彼に事実を知らせる
oppose: ～に反対する、～を対抗させる｜oppose the plan｜計画に反対する
trust: ～を信用する、～を信頼する、信頼、信用｜trust him｜彼を信用する
select: ～を選ぶ、選び抜かれた｜select a gift｜贈り物を選ぶ
praise: ～をほめる、～を賛美する、称賛｜praise him for his work｜彼の仕事のことで彼をほめる
handle: ～に対処する、～を扱う、取っ手｜handle the situation｜状況に対処する
propose: ～を提案する、結婚を申し込む｜propose a plan｜計画を提案する
breathe: 呼吸する、息をする｜breathe fresh air｜新鮮な空気を呼吸する
criticize: ～を非難する、～を批判する｜criticize the government｜政府を非難する
overcome: ～に打ち勝つ、～を克服する｜overcome a difficulty｜困難に打ち勝つ
possess: ～を持っている、～を所有する、（悪霊などが）～にとりつく｜possess wealth｜富を持っている
predict: ～を予言する、～を予測する｜predict the future｜未来を予言する
publish: ～を出版する、～を発表する｜publish a book｜本を出版する
float: 浮かぶ、～を浮かべる｜a floating boat｜浮かぶボート
recall: ～を思い出す、～を呼び戻す、回想｜recall the memory｜記憶を思い出す
explore: ～を探検する、～を探求する｜explore the island｜島を探検する
pretend: ～のふりをする｜pretend to sleep｜眠っているふりをする
absorb: ～を吸収する、～を夢中にさせる｜absorb water｜水を吸収する
resemble: ～に似ている｜resemble my father｜私の父に似ている
tear: ～を引き裂く、破れる、涙｜tear a paper｜紙を引き裂く
consume: ～を消費する｜consume energy｜エネルギーを消費する
compete: 競争する、匹敵する｜compete with others｜他人と競争する
quit: ～をやめる、辞める｜quit smoking｜喫煙をやめる
announce: ～を発表する、～を知らせる｜announce the news｜ニュースを発表する
react: 反応する、反発する｜react to light｜光に反応する
wander: 歩き回る、さまよう、それる｜wander around the town｜町を歩き回る
text: （携帯電話で）メールを送る、文章、本文｜text a friend｜友達にメールを送る
generate: ～を生み出す、～を発生させる｜generate electricity｜電気を生み出す
score: ～の点を取る、得点、成績｜score a goal｜点数（ゴール）を取る
government: 政府、政治｜the Japanese government｜日本政府
knowledge: 知識、認識｜basic knowledge｜基本的な知識
nation: 国、国家、国民｜the whole nation｜国全体
effort: 努力｜make an effort｜努力をする
period: 期間、時代、時限、終止符｜a long period｜長い時代（期間）
population: 人口、住民、個体数｜the world population｜世界の人口
purpose: 目的、意図｜the purpose of life｜人生の目的
behavior: 行動、振る舞い、態度｜human behavior｜人間の行動
lack: 不足、欠乏、～を欠いている｜lack of sleep｜睡眠の不足
skill: 技能、技術、熟練｜communication skill｜コミュニケーション技術
quality: 質、特質、高品質な｜high quality｜高い質
environment: 環境、周囲の状況｜the natural environment｜自然環境
role: 役割、役目、任務｜play an important role｜重要な役割を果たす
attitude: 態度、考え方、心構え｜a positive attitude｜積極的な態度
author: 著者、作者、作家｜the author of the book｜その本の筆者
research: 研究、調査、～を研究する｜scientific research｜科学的な研究
opportunity: 機会、好機、チャンス｜a good opportunity｜良い機会
source: 源、情報源、原因｜a source of energy｜エネルギーの源
carbon: 炭素｜carbon dioxide｜二酸化炭素（炭素）
shape: 形、状態、体調、～を形作る｜the shape of a circle｜円の形
advantage: 有利な点、利点、利益｜take advantage of...｜...の利点を利用する
method: 方法、方式、筋道｜a new method｜新しい方法
habit: 習慣、癖｜a good habit｜良い習慣
detail: 細部、詳細｜explain in detail｜細部にわたって説明する
distance: 距離、遠方｜a long distance｜長い距離
crowd: 群衆、人込み、群がる｜a large crowd｜大群衆
instance: 例、実例、場合｜for instance｜たとえば（例として）
desire: 願望、欲望、～を強く望む｜a strong desire｜強い願望
standard: 水準、基準、標準的な｜a high standard｜高い水準
task: 任務、仕事、課題｜a difficult task｜難しい仕事
generation: 世代、発生、同世代の人々｜the younger generation｜若い世代
responsibility: 責任、責務｜take responsibility｜責任をとる
experiment: 実験、試み、実験する｜do an experiment｜実験をする
athlete: 運動選手、アスリート｜a professional athlete｜プロの運動選手
decade: 10年間｜for a decade｜10年間
loss: 損失、失うこと、敗北｜a great loss｜大きな損失
fever: 熱、発熱、熱狂｜have a slight fever｜微熱がある
theory: 理論、学説｜the theory of relativity｜相対性理論
statement: 声明、主張、明細書｜make a statement｜記述（声明）をする
professor: 教授｜a university professor｜大学教授
function: 機能、役割、機能する、働く｜a basic function｜基本的な機能
surface: 表面、外見、表面の｜the surface of the earth｜地球の表面
envelope: 封筒｜an empty envelope｜からの封筒
organization: 組織、団体、手配｜an international organization｜国際組織
policy: 政策、方針、やり方｜foreign policy｜外交政策
resource: 資源、資金、機転｜natural resources｜天然資源
contrast: 対照、対比、対照をなす｜by contrast｜対比して
flood: 洪水、殺到、～を水浸しにする｜a heavy flood｜ひどい洪水
mate: 連れ合い、仲間、配偶者｜a good mate｜良い連れ合い
goods: 商品、品物、財産｜leather goods｜革商品
creature: 生き物、動物｜a living creature｜生きている動物（生き物）
structure: 構造、建造物、構成｜social structure｜社会構造
tradition: 伝統、慣習｜Japanese tradition｜日本の伝統
weight: 体重、重さ、重要性｜lose weight｜体重を減らす
charity: 慈善、慈善団体、思いやり｜a charity event｜慈善イベント
citizen: 市民、国民｜an ordinary citizen｜一般市民
impression: 印象、感銘｜a good impression｜良い印象
cartoon: 漫画、アニメ｜a popular cartoon｜人気のあるマンガ
career: 経歴、職業、生涯｜a successful career｜成功した経歴
site: 敷地、場所、遺跡、ウェブサイト｜a building site｜建設用地
passenger: 乗客、旅客｜a train passenger｜列車の乗客
violence: 暴力、激しさ｜domestic violence｜家庭内暴力
income: 収入、所得｜a high income｜高い所得
temperature: 温度、体温、気温｜a low temperature｜低い気温
majority: 大多数、過半数｜the majority of people｜大多数の人々
origin: 起源、由来、生まれ｜the origin of life｜生命の起源
literature: 文学、文献、印刷物｜English literature｜英文学
equipment: 設備、装備、機器｜medical equipment｜医療設備
stranger: 見知らぬ人、不慣れな人｜a complete stranger｜完全な見知らぬ人
strength: 強さ、力、長所｜physical strength｜肉体的な強さ
planet: 惑星、地球｜the planet Earth｜地球という惑星
fiction: 小説、作り話、フィクション｜science fiction｜SF（科学小説）
religion: 宗教、信仰｜believe in a religion｜宗教を信じる
pollution: 汚染、公害｜air pollution｜大気汚染
wealth: 富、財産、豊富｜great wealth｜莫大な富
document: 文書、記録、資料｜an official document｜公式文書
profit: 利益、もうけ、利益を得る｜make a profit｜もうけを出す
technique: 技術、技法、技巧｜a new technique｜新しい技術
emotion: 感情、情動、感動｜show emotion｜感情を表す
phenomenon: 現象、事象、驚異｜a natural phenomenon｜自然現象
horror: 恐怖、嫌悪、恐怖の｜a horror movie｜恐怖映画
ladder: はしご、階級｜climb a ladder｜はしごを登る
billion: 10億｜two billion people｜20億（十億）人の人々
status: 地位、状況、身分｜social status｜社会的な地位
youth: 青年時代、若者、若さ｜in my youth｜私の若者の頃に
confidence: 自信、信頼、秘密｜have confidence in...｜...に自信を持つ
edge: 端、縁、刃、優位｜the edge of the desk｜机の周辺（端）
household: 家庭、世帯、家庭の｜a household chore｜家庭の雑用
scholar: 学者、奨学生｜a famous scholar｜有名な学者
survey: 調査、概観、～を調査する｜conduct a survey｜調査を行う
vocabulary: 語彙｜a large vocabulary｜豊富な語彙
enemy: 敵、敵対者｜attack the enemy｜敵を攻撃する
construction: 建設、建築物、構造｜under construction｜建設中で
lecture: 講義、講演、説教｜give a lecture｜講義をする
instruction: 指示、教育、取扱説明書｜follow the instruction｜指示に従う
crisis: 危機、重大局面｜an economic crisis｜経済危機
instrument: 器具、楽器、手段｜a musical instrument｜音楽の器具（楽器）
crop: 作物、収穫高｜grow a crop｜作物を育てる
weapon: 武器、兵器｜a deadly weapon｜致命的な兵器
device: 装置、工夫、方策｜an electronic device｜電子装置
path: 道、進路、軌道｜a narrow path｜狭い道
earthquake: 地震｜a big earthquake｜大地震
stream: 小川、流れ、流れる｜a mountain stream｜山の小川
notion: 概念、観念、考え｜a common notion｜一般的な概念
yard: 庭、ヤード（長さの単位）  ｜play in the yard｜庭で遊ぶ
victim: 犠牲者、被害者｜a victim of the crime｜犯罪の犠牲者
fuel: 燃料、～に燃料を補給する、～をあおる｜fossil fuel｜化石燃料
ancestor: 祖先、先駆者｜our human ancestors｜私たち人類の祖先
soil: 土壌、土、土地、～を汚す｜rich soil｜豊かな土壌
debate: 討論、論争、～を討論する、～を熟考する｜a public debate｜公開討論
crime: 犯罪、罪｜commit a crime｜犯罪を犯す
colleague: 同僚、仲間｜a work colleague｜職場の同僚
shelf: 棚｜on the shelf｜棚の上に
analysis: 分析、解剖｜a careful analysis｜注意深い分析
universe: 宇宙、全世界、領域｜the whole universe｜宇宙全体
electricity: 電気、電力｜generate electricity｜電気を発生させる
insect: 昆虫、虫｜a flying insect｜飛んでいる昆虫
web: クモの巣、網、ウェブ｜a spider's web｜クモの巣
storm: 嵐、暴風雨、激しく降る、突撃する｜a heavy storm｜激しい嵐
plenty: 十分な、豊富さ、たくさんの｜plenty of time｜十分な時間
agriculture: 農業、農学｜modern agriculture｜現代の農業
gene: 遺伝子｜a human gene｜人間の遺伝子
evidence: 証拠、根拠、形跡｜clear evidence｜明らかな証拠
consequence: 結果、重要さ、影響｜as a consequence｜結果として
infant: 幼児、赤ん坊、初期の｜a newborn infant｜生まれたばかりの幼児
leisure: 暇、余暇、レジャー｜leisure time｜暇な時間
cell: 細胞、電池、独房｜a brain cell｜脳の細胞
talent: 才能、才能のある人｜a hidden talent｜隠された才能
advertising: 広告、宣伝｜television advertising｜テレビ広告
extent: 程度、範囲、広がり｜to some extent｜ある程度まで
garbage: ごみ、生ごみ、がらくた｜throw away garbage｜ごみを捨てる
public: 一般大衆の、公の、公共の、大衆｜the general public｜一般大衆
kind: 種類、親切な、優しい｜various kinds of...｜さまざまな種類の...
similar: 似ている、類似した｜be similar to...｜...と似ている
complete: 完全な、全部の、～を完成させる、～を終える｜complete failure｜完全な失敗
sharp: 鋭い、急激な、はっきりした｜a sharp pain｜急激な痛み
expensive: 高価な、費用のかかる｜an expensive car｜高価な車
political: 政治の、政治的な｜a political party｜政治的な政党
aware: 気づいている、認識している｜be aware of the fact｜事実に気づいている
ancient: 古代の、昔の、古い｜ancient history｜古代の歴史
medical: 医学の、医療の｜medical care｜医学の治療
essential: 不可欠な、本質的な、非常に重要な｜an essential factor｜不可欠な要因
huge: 巨大な、ばくだいな｜a huge amount of...｜巨大な量の...
terrible: ひどい、恐ろしい、悲惨な｜a terrible mistake｜ひどい間違い
practical: 実用的な、実際的な、現実的な｜practical experience｜実用的な経験
entire: 全体の、全部の、完全な｜the entire world｜全世界
favorite: お気に入りの、一番好きな、お気に入り｜my favorite song｜私の一番好きな歌
comfortable: 快適な、心地よい、くつろいだ｜a comfortable chair｜快適な椅子
minor: 小さい方の、重要でない、未成年者、副専攻｜a minor problem｜小さい問題
typical: 典型的な、特有の｜a typical example｜典型的な例
ideal: 理想的な、観念的な、理想｜an ideal place｜理想的な場所
principal: 主要な、第一の、校長、長｜the principal reason｜主要な理由
appropriate: 適切な、ふさわしい、～を当てる、～を横領する｜an appropriate action｜適切な行動
empty: からの、空虚な、～をからにする｜an empty box｜からの箱
rapid: 急速な、速い｜rapid growth｜急速な成長
mental: 精神の、知的な、心的な｜mental health｜精神の健康
excellent: すばらしい、優秀な｜an excellent idea｜すばらしいアイデア
convenient: 都合がいい、便利な｜convenient for you｜都合がいい
potential: 潜在的な、可能性のある、潜在能力、可能性｜a potential danger｜潜在的な危険
financial: 財政的な、金融の、財務の｜financial support｜財政的な支援
enormous: 莫大な、巨大な｜an enormous amount｜莫大な量
rare: 珍しい、まれな、希少な｜a rare bird｜珍しい鳥
artificial: 人工の、不自然な｜artificial intelligence｜人工知能
tiny: ちっちゃな、とても小さい｜a tiny detail｜ちっちゃな細部
considerable: かなりの、相当な｜a considerable amount｜かなりの量
sensitive: 敏感な、神経質な、思いやりのある｜a sensitive skin｜敏感な肌
intellectual: 知的な、知性の、知識人｜intellectual property｜知的な財産
thirsty: のどが渇いた、渇望して｜feel thirsty｜のどが渇く
polite: 礼儀正しい、丁寧な｜a polite greeting｜礼儀正しい挨拶
accurate: 正確な、的確な｜accurate information｜正確な情報
rude: 失礼な、無礼な、粗野な｜a rude attitude｜失礼な態度
sufficient: 十分な、足りる｜sufficient food｜十分な食べ物
urban: 都会の、都市の｜an urban area｜都会の地域
temporary: 一時的な、仮の｜a temporary job｜一時的な仕事
primitive: 原始的な、初期の、未開の｜a primitive society｜原始的な社会
permanent: 永久の、不変の、常設の｜a permanent job｜永久の仕事
elderly: 高齢の、年配の｜elderly people｜高齢の人々
severe: 厳しい、ひどい、深刻な｜severe weather｜厳しい天候
brief: 簡潔な、短い、～に概要を伝える｜a brief description｜簡潔な説明
mobile: 流動的な、移動できる、携帯電話｜a mobile phone｜流動的な電話（携帯電話）
latest: 最新の、最近の｜the latest news｜最新のニュース
military: 軍事的な、軍隊の、軍隊｜military force｜軍事的な力
strict: 厳しい、厳格な、厳密な｜strict rules｜厳しい規則
solid: 固体の、しっかりした、固体｜solid state｜固体の状態
stupid: ばかな、愚かな｜a stupid question｜ばかな質問
biological: 生物学の、生物学的な｜biological diversity｜生物の多様性
probably: おそらく、たぶん｜probably true｜おそらく本当の
hardly: ほとんど～ない｜hardly believe｜ほとんど信じられない
immediately: すぐに、ただちに｜answer immediately｜すぐに答える
eventually: ついに、最終的には｜eventually succeed｜ついに成功する
frequently: しばしば、頻繁に｜frequently ask｜しばしば尋ねる
extremely: 非常に、極度に｜extremely hot｜非常に暑い
gradually: だんだん、徐々に｜gradually improve｜だんだん向上する
instantly: すぐに、即座に｜recognize instantly｜すぐに認識する
nevertheless: それにもかかわらず｜nevertheless it is true｜それにもかかわらず本当だ
moreover: その上、さらに｜moreover, it is cheap｜その上、安い
relatively: 比較的、相対的に｜relatively easy｜比較的簡単な
apparently: 一見、見たところでは、どうやら～らしい｜apparently good｜一見良い
definitely: 絶対に、はっきりと、間違いなく｜definitely yes｜絶対にそうだ
largely: 主に、大部分は、大いに｜largely ignore｜主に無視する
mostly: 大部分は、たいてい｜mostly sunny｜大部分は晴れた
approximately: およそ、約｜approximately ten years｜およそ10年
overnight: 一晩、一晩中、急に、一晩の｜stay overnight｜一晩泊まる
accidentally: 偶然、誤って｜happen accidentally｜偶然起こる
despite: ～にもかかわらず｜despite the rain｜雨にもかかわらず
proceed: 進む｜proceed to the next stage｜次の段階へ進む
ensure: ～を確実にする、保証する｜ensure safety｜安全を確実にする
interpret: ～を解釈する、通訳する｜interpret the meaning｜意味を解釈する
cease: ～しなくなる、終わる｜cease to exist｜存在しなくなる
ban: ～を（公式に）禁止する、禁止｜ban smoking｜喫煙を（公式に）禁止する
obey: ～に従う｜obey the rules｜規則に従う
eliminate: ～を除去する、排除する｜eliminate waste｜不要なものを除去する
resist: ～に抵抗する、耐える｜resist the pressure｜圧力に抵抗する
accompany: ～に同伴する、～に伴う｜accompany him｜彼に同伴する
commit: ～を犯す、～を委任する、本気で取り組む｜commit a crime｜罪を犯す
pursue: ～を追求する、～を続ける｜pursue a goal｜目標を追求する
demonstrate: ～を論証する、～を明らかに示す、デモをする｜demonstrate the fact｜事実を明らかに示す
bet: きっと～だと思う、賭ける｜bet that it will rain｜きっと雨が降ると思う
ruin: ～を台無しにする、破滅させる、廃墟｜ruin the plan｜計画を台無しにする
threaten: ～を脅迫する、脅かす｜threaten him｜彼を脅迫する
attach: ～を取り付ける、～を添付する｜attach a label to the box｜箱にラベルをくっつける
reverse: ～を逆にする、反対、逆の｜reverse the order｜順序を逆転する
restrict: ～を制限する｜restrict the use｜使用を制限する
compose: ～を組み立てる、作曲する、～を構成する｜compose a team｜チームを組み立てる
lean: もたれる、寄りかかる、傾く、やせた｜lean against the wall｜壁によりかかる
substitute: ～を代わりに用いる、代わりの人（物）｜substitute A for B｜Bの代わりにAを用いる
trace: ～の跡をたどる、～を追跡する、痕跡｜trace the history｜歴史の跡をたどる
interrupt: ～を妨げる、中断させる｜interrupt the conversation｜会話を妨げる
confront: ～に立ち向かう、直面する｜confront a difficulty｜困難に立ち向かう
illustrate: ～を説明する、～に挿絵を入れる｜illustrate with an example｜例で示す
arrest: ～を逮捕する、逮捕｜arrest a suspect｜容疑者を逮捕する
stimulate: ～を刺激する、活気づける｜stimulate the economy｜経済を刺激する
assure: ～に保証する、～を確信させる｜assure him of success｜彼に成功を保証する
consult: ～に相談する、～を参照する｜consult a doctor｜医者に相談する
depress: ～を憂うつにさせる、～を落胆させる｜depress him｜彼を憂鬱にさせる
crash: 激突する、墜落する、衝突｜crash into a wall｜壁に激突する
inspire: ～を奮起させる、～にひらめきを与える｜inspire him to try｜彼を奮起させる
specialize: 専門にする、専攻する｜specialize in biology｜生物学を専門にする
cultivate: （植物・作物を）栽培する、（才能などを）育む｜cultivate plants｜植物を栽培する
fulfill: （約束・要求などを）果たす、満たす｜fulfill a promise｜約束を果たす
transmit: ～を送る、～を伝える、（病気を）伝染させる｜transmit a signal｜信号を送る
found: ～を設立する、～の基礎を置く｜found a company｜会社を設立する
clap: 手をたたく、拍手する｜clap my hands｜手をたたく
burst: 破裂する、突然～し出す｜burst into tears｜突然泣き出す（破裂する）
bow: おじぎをする、おじぎ、弓｜bow to the audience｜観客におじぎする
dismiss: （考えなどを）退ける、～を解雇する、解散させる｜dismiss the idea｜考えを無視する
breed: ～を繁殖させる、繁殖する、品種｜breed animals｜動物を繁殖させる
prohibit: ～を禁止する｜prohibit smoking｜喫煙を禁じる
oblige: ～に強いる、～に恩恵を施す｜oblige him to pay｜彼に支払いを強いる
qualify: ～に適任である、資格を得る｜qualify for the job｜その仕事に適任である
invest: （お金を）投資する｜invest money｜金を投資する
grasp: ～をしっかりつかむ、～を理解する｜grasp the meaning｜意味を理解する
collapse: 崩壊する、倒れる、崩壊｜the building collapses｜建物が崩壊する
overlook: ～を見落とす、～を見逃す、～を見渡す｜overlook a mistake｜間違いを見落とす
accuse: ～を非難する、～を告訴する｜accuse him of lying｜彼を非難する
frustrate: ～を欲求不満にさせる、挫折させる｜frustrate him｜彼を欲求不満にさせる
deprive: ～から（権利・機会などを）奪う｜deprive him of his right｜彼から権利を奪う
astonish: ～を驚嘆させる｜astonish the world｜世界を驚嘆させる
register: ～を登録する、記録する、登録｜register my name｜名前を登録する
correspond: 一致する、文通する｜correspond with the facts｜事実と一致する
cast: ～を投げる、～に役を割り当てる｜cast a shadow｜影を投げる
attribute: ～を（…の）せいにする、属性｜attribute his success to hard work｜成功は努力のおかげだと思う
neglect: ～を無視する、怠る、怠慢｜neglect the duty｜義務を怠る
starve: 飢える、餓死する｜starve to death｜飢え死にする（飢える）
resolve: ～を解決する、～を決心する｜resolve the problem｜問題を解決する
impose: ～を課す、押しつける｜impose a tax on him｜彼に税を押し付ける
convert: ～を転換する、改宗させる｜convert into energy｜エネルギーに転換する
scare: ～をおびえさせる、怖がらせる｜scare a child｜子どもをおびえさせる
constitute: ～を構成する、～を制定する｜constitute a crime｜犯罪を構成する
appoint: ～を任命する、指定する｜appoint a committee｜委員会を任命する
imply: ～を暗に意味する、ほのめかす｜imply that it is true｜それが真実だと（暗に）意味する
assign: ～を割り当てる、～を配属する｜assign a task｜仕事を割り当てる
nod: うなずく、うたた寝する｜nod in agreement｜同意してうなずく
elect: ～を選挙で選ぶ｜elect a president｜大統領を選挙で選ぶ
transfer: ～を移す、転勤（転校）する、移転｜transfer money｜お金を移す
rob: ～から（金品などを）奪う、強奪する｜rob him of his money｜彼からお金を奪う
capture: ～を捕らえる、～を占領する、捕獲｜capture a wild animal｜野生動物を捕らえる
undertake: ～を引き受ける、～に着手する｜undertake a project｜仕事を引き受ける
drown: 溺れ死ぬ、～を溺死させる｜drown in the sea｜海でおぼれ死ぬ
split: ～を割る、分裂する、裂け目｜split the bill｜勘定を割る
resort: （手段に）訴える、リゾート、行楽地｜resort to violence｜暴力に訴える
descend: 降りる、下る、伝わる｜descend the stairs｜階段を下る
irritate: ～をいらだたせる、～を刺激する｜irritate him｜彼をいらだたせる
pronounce: ～を発音する、～を宣言する｜pronounce the word｜その単語を発音する
equip: ～を装備させる｜equip a car with a radio｜車にラジオを装備させる
cheat: 不正行為をする、いかさまをする、だます｜cheat on an exam｜試験でいかさまをする
emerge: 現れる、明らかになる｜emerge from the dark｜暗闇から現れる
devote: ～を捧げる、充てる｜devote my life to art｜芸術に私の人生をささげる
heal: ～を治す、治る｜heal the wound｜傷を治す
urge: ～に強く迫る、～を説得する、衝動｜urge him to go｜彼に行くよう強く迫る
envy: ～をうらやむ、嫉妬｜envy his success｜彼の成功をうらやむ
chase: ～を追いかける、追跡｜chase a thief｜泥棒を追いかける
prompt: ～を促す、迅速な｜prompt him to speak｜彼に話すよう促す
withdraw: ～を引っ込める、引き出す、退く｜withdraw money｜預金を引き出す
detect: ～を見つける、探知する｜detect a signal｜信号を探知する
interfere: 邪魔する、干渉する｜interfere with his work｜彼の仕事を邪魔する
kid: からかう、冗談を言う、子ども｜kid about it｜それについて冗談を言う
launch: ～を打ち上げる、～を開始する｜launch a rocket｜ロケットを打ち上げる
endanger: ～を危険にさらす｜endanger his life｜彼の命を危険にさらす
foster: ～を促進する、～を養育する、里親の｜foster a child｜子どもを育成する
diminish: 減少する、～を減らす｜diminish in size｜サイズが減少する
spill: ～をこぼす、こぼれる｜spill coffee｜コーヒーをこぼす
infect: ～に感染させる｜infect him with a virus｜彼にウイルスを感染させる
stem: ～から生じる、由来する、茎｜stem from the fact｜事実から生じる
tap: ～を軽くたたく、蛇口｜tap on the shoulder｜肩を軽くたたく
embrace: ～を抱きしめる、～を受け入れる｜embrace a new idea｜新しい考えを受け入れる
proportion: 割合、比率、つり合い、部分｜a large proportion of...｜...の大きな比率
contract: 契約、契約書、～を契約する、(病気)にかかる、収縮する｜sign a contract｜契約にサインする
chest: 胸、箱｜chest pain｜胸の痛み
treasure: 宝物、財宝、～を大切にする｜hidden treasure｜隠された財宝
stock: 株式、在庫(品)、蓄え｜buy stock｜株を買う
facility: 施設、設備、才能｜a sports facility｜スポーツ設備
sum: 金額、合計、要約する｜a large sum of money｜多額の金額
rank: 地位、階級、～を位置づける｜a high rank｜高い地位
democracy: 民主主義、民主国家｜a true democracy｜真の民主主義
emergency: 緊急事態、非常時｜in case of emergency｜緊急事態には
protest: 抗議、抗議する｜a protest against the war｜戦争への抗議
immigrant: （外国からの）移民｜an illegal immigrant｜不法移民
vehicle: 乗り物、車、伝達手段｜a motor vehicle｜自動車（乗り物）
routine: 決まりきった仕事、日課、日常の｜daily routine｜毎日の決まりきった仕事
stuff: (漠然と)物、材料、～を詰め込む｜a lot of stuff｜たくさんの物
row: 列、並び、(ボート)をこぐ｜in a row｜1列に
profile: 横顔、プロフィール、人物紹介｜a user profile｜ユーザーのプロフィール
dawn: 夜明け、始まり、夜が明ける｜at dawn｜夜明けに
welfare: 福祉、幸福｜social welfare｜社会福祉
perspective: 見方、観点、遠近法｜from a global perspective｜世界的な見方（観点）から
enthusiasm: 熱意、情熱｜show enthusiasm｜熱意を示す
faith: 信頼、信仰、信念｜lose faith in...｜...への信頼を失う
occupation: 職業、占領｜his occupation｜彼の職業
witness: 目撃者、証人、～を目撃する｜an eyewitness｜目撃者
kingdom: 王国、～界｜the animal kingdom｜動物王国
equivalent: 同等の、同等のもの、相当するもの｜the Japanese equivalent of...｜...に相当する日本のもの
objective: 目的、目標、客観的な｜achieve an objective｜目的を達成する
pile: 積み重ね、山、～を積み重ねる｜a pile of books｜本の積み重ね
shelter: 避難（所）、保護、～を保護する｜take shelter｜避難する
trial: 試み、裁判、試練｜a clinical trial｜臨床試験（試み）
honor: 名誉、敬意、～を尊敬する｜a great honor｜大きな名誉
territory: 領土、縄張り、領域｜enemy territory｜敵の領土
frame: わく、骨組み、～を組み立てる｜a picture frame｜写真のわく
border: 国境、境界、ふち｜cross the border｜国境を越える
statistics: 統計（学）、統計の数字｜official statistics｜公式な統計
enterprise: 企業、事業、進取の気性｜a private enterprise｜民間企業
context: 文脈、状況、背景｜in this context｜この文脈で
load: 荷物、負担、～に荷を積む｜a heavy load｜重い荷物
grain: 穀物、粒、少し｜a grain of rice｜米の穀物
review: 再検討、復習、批評、～を復習する｜a book review｜本の再検討（書評）
prejudice: 偏見、先入観｜prejudice against women｜女性に対する偏見
strain: 負担、緊張、～をぴんと張る、～を痛める｜put a strain on...｜...に負担をかける
trap: わな、策略、～をわなにかける、閉じ込める｜fall into a trap｜わなに落ちる
temper: 気性、機嫌、怒り｜lose my temper｜気性を失う（怒る）
slave: 奴隷｜a black slave｜黒人の奴隷
wound: 傷、けが、～を傷つける｜a deep wound｜深い傷
divorce: 離婚、～と離婚する｜get a divorce｜離婚する
tune: 曲、メロディー、～の調子を合わせる｜sing a tune｜曲を歌う
height: 高さ、高地、最盛期｜height and weight｜高さと重さ
faculty: （大学の）学部、能力、教授陣｜the faculty of science｜理学部
span: 期間、長さ、幅｜a short life span｜短い寿命（期間）
dimension: 次元、側面、要素、寸法｜a new dimension｜新しい側面
version: 版、翻訳、説明、見解｜the latest version｜最新版
parallel: 平行の、類似した、類似（物）、匹敵するもの｜have no parallel｜匹敵するものがない
horizon: 地平線、水平線、視野｜over the horizon｜地平線の向こうに
acquaintance: 知人、面識、知識｜an old acquaintance｜古い知人
burden: 重荷、負担、～に重荷を負わせる｜a heavy burden｜重い重荷
basis: 基礎、根拠、基準｜on a daily basis｜毎日の基礎（基準）で
poison: 毒、毒薬、～を毒殺する｜deadly poison｜致命的な毒
constitution: 憲法、構成、体質｜the Japanese Constitution｜日本国憲法
administration: 行政、管理、政府｜business administration｜企業経営
charm: 魅力、お守り、～を魅了する｜a special charm｜特別な魅力
organ: 器官、臓器、オルガン｜an internal organ｜内部の臓器
prey: 獲物、えじき、捕食する｜fall prey to...｜...の獲物になる
venture: 冒険的事業、ベンチャー、危険を冒して行く｜a joint venture｜共同の冒険的事業
mission: 使命、任務、使節団｜a dangerous mission｜危険な任務
inquiry: 調査、探求、問い合わせ｜make an inquiry｜調査（問い合わせ）をする
award: 賞、賞品、～を授与する｜an Academy Award｜アカデミー賞
strip: 細長い一片、～から（服などを）はぎ取る｜a long strip of paper｜細長い一片の紙
distress: 苦しみ、悲嘆、苦難、～を苦しめる｜in deep distress｜深い苦しみの中で
circulation: 循環、流通、発行部数｜blood circulation｜血液の循環
shade: 日陰、色合い、わずかな違い｜sit in the shade｜日陰に座る
stereotype: 典型的なイメージ、固定観念、類型｜a cultural stereotype｜文化的な固定観念
client: （弁護士などの）依頼人、顧客｜a lawyer's client｜弁護士の依頼人
output: 生産高、出力｜factory output｜工場の生産高
lord: 神、君主、貴族｜praise the Lord｜神を賛美する
convention: 慣習、しきたり、会議、大会｜social convention｜社会の慣習
mine: 鉱山、地雷、（代名詞）私のもの｜a coal mine｜炭鉱（鉱山）
craft: 工芸、技術、船、飛行機｜traditional craft｜伝統工芸
core: 核心、中心、芯｜the core of the problem｜問題の核心
stroke: 脳卒中、発作、打撃、一撃、～をなでる｜suffer a stroke｜脳卒中（発作）を患う
frontier: 国境、辺境、最前線｜the western frontier｜西部の国境
peer: 同僚、同等の人、じっと見る｜peer pressure｜同僚からの圧力
vessel: 血管、管、船、器｜a blood vessel｜血管
disability: （身体・精神の）障害、無力｜physical disability｜身体障害
gravity: 重力、引力、重大さ｜zero gravity｜無重力
ethic: 倫理、道徳｜medical ethics｜医療倫理
terminal: 終点、端末、末期の｜a bus terminal｜バスの終点
tide: 潮流、潮の干満、傾向｜high tide｜高潮（潮の干満）
abuse: 虐待、乱用、～を虐待する、～を乱用する｜child abuse｜児童虐待
guilty: 有罪の、罪の意識がある｜feel guilty｜罪の意識がある
vital: きわめて重要な、生命の、活気のある｜play a vital role｜きわめて重要な役割を果たす
fellow: 仲間の、同僚、やつ｜my fellow workers｜私の仲間の労働者
contemporary: 現代の、同時代の、同時代の人｜contemporary art｜現代（同時代）のアート
annual: 年に1度の、1年間の、年鑑｜an annual income｜年間の（年に1度の）収入
accustomed: 慣れた、いつもの｜be accustomed to...｜...に慣れている
steady: しっかりした、安定した、絶え間ない｜steady growth｜しっかりした成長
dull: 退屈な、鈍い、どんよりした｜a dull movie｜退屈させる映画
keen: 熱望して、鋭い、熱心な｜keen interest｜鋭い（熱望する）関心
loose: ゆるい、解き放たれた、だらしない｜a loose sweater｜ゆるいセーター
delicate: 繊細な、上品な、壊れやすい、微妙で難しい、(体が)弱い｜a delicate issue｜繊細な（微妙で難しい）問題
internal: 内部の、国内の、(心の)内面の｜an internal problem｜内部の（国内の）問題
casual: 形式ばらない、何気ない、思いがけない、(服などが)カジュアルな｜casual clothes｜形式ばらない（気楽な）服
mature: 成熟した、熟した、～を成熟させる、(保険などが)満期になる｜a mature adult｜成熟した大人
concrete: 具体的な、現実の、コンクリート製の、コンクリート｜a concrete example｜具体的な例
awful: ひどい、恐ろしい、ものすごい｜an awful smell｜ひどいにおい
exhausted: 疲れ切った、使い果たされた｜feel exhausted｜疲れ切っている
overall: 全体的な、全面的な、概して、(複数形で)オーバーオール｜an overall plan｜全面的な（全体的な）計画
tight: 引き締まった、きつい、(予定などが)ぎっしり詰まった、厳格な｜a tight schedule｜引き締まった（きつい）スケジュール
prime: 最も重要な、主要な、最高の、全盛期｜the prime importance｜最も重要な（主要な）重要性
genuine: 本物の、真の、心からの｜a genuine diamond｜本物の（真の）ダイヤモンド
modest: 控えめな、謙虚な、(数量などが)わずかな、しとやかな｜a modest person｜控えめな（謙虚な）人
intimate: 親密な、深い関係にある、個人的な、～をほのめかす｜an intimate friend｜親密な友人
minimum: 最小限の、最低限度の、最小限、最低限｜the minimum wage｜最小限の賃金
sophisticated: 高度な、洗練された、精巧な、教養のある｜sophisticated technology｜高度な技術
latter: 後者の、後半の、(the～で)後者｜the latter half｜後者の半分
bitter: 苦い、つらい、痛烈な、腹を立てた｜a bitter experience｜苦い（つらい）経験
peculiar: 独特の、固有の、妙な、風変わりな｜a peculiar custom｜独特の（固有の）習慣
passive: 受動的な、消極的な｜a passive attitude｜受動的な（消極的な）態度
ethnic: 民族の、人種の、民族的な｜an ethnic group｜民族的な集団
noble: 高貴な、崇高な、貴族の、貴族｜a noble family｜高貴な家族
vain: 無駄な、うぬぼれの強い、はかない｜a vain effort｜むだな努力
innocent: 無罪の、罪のない、無邪気な、純真な｜an innocent child｜無罪の（無邪気な）子供
underlying: 根本的な、潜在的な、下にある｜the underlying cause｜根本的な原因
alien: 外国の、異質な、相容れない、宇宙人、外国人｜an alien culture｜外国の（異質な）文化
relevant: 関連のある、適切な｜relevant information｜関連のある情報
inclined: (～したい)気がある、～する傾向がある、傾斜した｜be inclined to agree｜同意する傾向がある（Ｖしたい気がある）
awkward: 気まずい、不器用な、扱いづらい｜an awkward silence｜気まずい沈黙
brilliant: すばらしい、光り輝く、才能にあふれた｜a brilliant idea｜すばらしいアイデア
desperate: 必死の、絶望的な、自暴自棄の｜a desperate attempt｜必死の試み
refreshing: さわやかな、すがすがしい、斬新な｜a refreshing drink｜さわやかな飲み物
thrilled: とてもわくわくした、感激した｜be thrilled to hear that｜それを聞いてとてつもなくうれしい
inner: 内側の、精神的な、中心部の｜the inner wall｜内側の壁
consistent: 矛盾のない、一致した、不変の｜a consistent policy｜矛盾のない（一致した）政策
plain: 明白な、平易な、質素な、飾りのない、平原｜plain English｜明白な（わかりやすい）英語
vivid: 鮮やかな、鮮明な、生き生きとした｜a vivid memory｜鮮やかな記憶
miserable: 惨めな、不幸な、ひどく不足した｜a miserable life｜惨めな生活
substantial: 相当な、多大な、実質的な、頑丈な｜a substantial amount｜相当な（多大な）量
fond: (～が)好きで、懐かしい｜be fond of reading｜読書が好きだ
false: 間違った、偽の、うその、不忠実な｜a false statement｜まちがいの記述
lazy: 怠惰な、怠けている、のんびりした｜a lazy student｜怠惰な生徒
precisely: 正確に、まさに、ちょうど｜answer precisely｜正確に（まさに）答える
meanwhile: その間に、一方では｜meanwhile, he arrived｜その間に彼が到着した
altogether: 完全に、全く、全部で、概して｜disappear altogether｜完全に消える
lately: 最近、近頃｜have been busy lately｜最近忙しい
barely: かろうじて、やっと、ほとんど～ない｜barely survive｜かろうじて生き残る
scarcely: ほとんど～ない、かろうじて｜scarcely believe it｜ほとんど信じられない
accordingly: それに応じて、それ相応に、したがって｜act accordingly｜それ相応に行動する
deliberately: わざと、意図的に、慎重に｜do it deliberately｜わざとそれをする
beneath: ～の下に、～に値しない｜beneath the surface｜表面の下で
whereas: ～だが一方、～であるのに｜whereas he is rich｜彼は金持ちだが一方
declare: ～を宣言する、～と断言する、(税関で)～を申告する｜declare independence｜独立を宣言する
alter: ～を変える、変わる、(服を)作り直す｜alter the plan｜計画を変える
arise: 生じる、起こる、立ち上がる｜problems arise｜問題が生じる
transform: ～を変化させる、～を変える｜transform the system｜システムを変える
defeat: ～を打ち負かす、～を挫折させる、敗北｜defeat the enemy｜敵を打ち負かす
investigate: ～を調査する、～を捜査する、～を研究する｜investigate the cause｜原因を調査する
distinguish: ～を見分ける、～を区別する、～を際立たせる｜distinguish colors｜色を見分ける
bury: ～を埋める、～を埋葬する、～を隠す｜bury a treasure｜宝物を埋める
cope: うまく対処する、対抗する｜cope with stress｜ストレスにうまく対処する
occur: 起こる、生じる、(考えなどが)心に浮かぶ｜an accident occurs｜事故が起こる
accomplish: ～をやり遂げる、～を達成する｜accomplish a goal｜目標をやりとげる
hesitate: ためらう、躊躇する｜hesitate to say｜言うのをためらう
endure: ～に耐える、～を我慢する、持ちこたえる｜endure the pain｜苦痛に耐える
conclude: ～と結論づける、～を締めくくる、～を締結する｜conclude that it is true｜それは本当だと結論づける
guarantee: ～を保証する、～を約束する、保証、保証書｜guarantee success｜成功を保証する
dominate: ～を支配する、～で優位に立つ、～を見下ろす｜dominate the market｜市場を支配する
confirm: ～を裏付ける、～を認める、～を確認する｜confirm the reservation｜予約を裏付ける（確認する）
greet: ～にあいさつする、～を迎える｜greet a guest｜客にあいさつする
entertain: ～を楽しませる、～をもてなす、(考えなどを)心に抱く｜entertain the audience｜観客を楽しませる
defend: ～を守る、～を弁護する｜defend the country｜国を守る
forbid: ～を禁じる、～を許さない｜forbid him to go｜彼が行くのを禁じる
broadcast: ～を放送する、～を言いふらす、放送｜broadcast the news｜ニュースを放送する
sacrifice: ～を犠牲にする、～を捧げる、犠牲、供え物｜sacrifice my life｜私の命を犠牲にする
punish: ～を罰する、～を懲らしめる｜punish a criminal｜犯罪者を罰する
glance: ちらりと見る、ざっと目を通す、一瞥｜glance at the clock｜時計をちらりと見る
retain: ～を保持する、～を維持する、～を覚えている｜retain the memory｜記憶を保持する
calculate: ～を計算する、～を予測する｜calculate the cost｜費用を計算する
sink: 沈む、～を沈める、衰える、流し台｜a sinking ship｜沈む船
rescue: ～を救助する、～を救い出す、救助｜rescue a child｜子供を救助する
beg: ～を乞う、～を頼む、～を伏してお願いする｜beg for money｜お金を乞う
define: ～を定義する、～を明確にする｜define the word｜単語を定義する
deceive: ～をだます、～を欺く｜deceive people｜人々をだます
convey: ～を伝える、～を運ぶ｜convey a message｜メッセージを伝える
sustain: ～を維持する、～を支える、(損害などを)被る｜sustain life｜生命を維持する
purchase: ～を購入する、購入、購入品｜purchase a car｜車を購入する
fade: (色が)あせる、(音が)消えていく、衰える｜memories fade｜記憶が薄れる
regulate: ～を規制する、～を調整する｜regulate the temperature｜温度を規制する
distribute: ～を分配する、～を配布する、～を流通させる｜distribute leaflets｜チラシを分配する
enhance: ～を向上させる、～を高める｜enhance the value｜価値を向上させる
chat: おしゃべりする、雑談、チャット｜chat with friends｜友達とおしゃべりする
exceed: ～を超える、～に勝る｜exceed the speed limit｜制限速度を超える
wipe: ～をふく、～をぬぐう、ふくこと｜wipe the table｜テーブルをふく
cooperate: 協力する、協同する｜cooperate with each other｜協力する
inherit: ～を受け継ぐ、～を相続する｜inherit property｜財産を受け継ぐ
unite: ～を団結させる、～を結合させる、団結する｜unite the country｜国を団結させる
leap: 跳ぶ、跳ねる、急上昇する、跳躍｜leap over the fence｜フェンスを跳ぶ
exaggerate: ～を誇張する、～を大げさに言う｜exaggerate the story｜話を誇張する
conquer: ～を征服する、～を克服する｜conquer the world｜世界を征服する
melt: 溶ける、～を溶かす、和らぐ｜snow melts｜雪が溶ける
invade: ～に侵入する、～を侵略する、(権利など)を侵害する｜invade a country｜国に侵入する
modify: ～を修正する、～を変更する、～を緩和する｜modify the plan｜計画を修正する
scatter: ～をばらまく、～を追い散らす、散らばる｜scatter seeds｜種をばらまく
undergo: ～を経験する、(検査・治療など)を受ける、～に耐える｜undergo surgery｜手術を経験する
evaluate: ～を評価する、～を査定する｜evaluate the performance｜業績を評価する
bend: 身をかがめる、～を曲げる、曲がる｜bend down｜身をかがめる
derive: 由来する、～を引き出す、～を推論する｜derive from Latin｜ラテン語に由来する
screaming: 悲鳴をあげること、叫び声（scream: 悲鳴をあげる）｜screaming fans｜悲鳴をあげるファン
gaze: 見つめる、注視する、凝視｜gaze at the stars｜星を見つめる
pray: 祈る、懇願する｜pray for peace｜平和を祈る
polish: ～を磨く、～を洗練させる、ツヤ｜polish shoes｜靴を磨く
classify: ～を分類する、～を機密扱いにする｜classify books｜本を分類する
assert: ～と主張する、～を断言する｜assert my right｜私の権利だと主張する
grab: ～をつかむ、～を横取りする、つかむこと｜grab an apple｜りんごをつかむ
fold: ～を折りたたむ、(腕など)を組む、折り目｜fold the paper｜紙を折りたたむ
sweep: ～を掃く、(波などが)～をさらう、圧勝する｜sweep the floor｜床を掃く
whisper: ささやく、ひそひそ話す、ささやき声｜whisper in her ear｜彼女の耳にささやく
imitate: ～をまねる、～を模造する｜imitate him｜彼をまねる
stare: じっと見る、凝視する｜stare at me｜私をじっと見る
emphasize: ～を強調する、～を重視する｜emphasize the point｜その点を強調する
rid: ～を取り除く、～を自由にする｜get rid of stress｜ストレスを取り除く
pour: ～を注ぐ、流れ出る、(雨が)激しく降る｜pour water｜水を注ぐ
vanish: 消える、見えなくなる、消滅する｜vanish into the air｜空中に消える
restore: ～を修復する、～を回復させる、～を返還する｜restore the building｜建物を修復する
deserve: ～に値する、～の価値がある、～して当然だ｜deserve a prize｜賞をもらって当然だ
laboratory: 研究所、実験室｜a science laboratory｜科学の研究所
conference: 会議、協議会、連盟｜an international conference｜国際会議
continent: 大陸｜the African continent｜アフリカ大陸
insurance: 保険、保険金、予防手段｜life insurance｜生命保険
crew: 乗組員たち、(作業の)チーム、班｜the ship's crew｜船の乗組員たち
poverty: 貧困、貧乏、欠乏｜live in poverty｜貧乏に暮らす
shortage: 不足、欠乏｜a water shortage｜水不足
affair: 情勢、問題、事件、不倫｜international affairs｜国際情勢
exception: 例外、特例｜make an exception｜例外を作る
wage: 賃金、(戦争など)を行う｜a low wage｜低い賃金
wisdom: 知恵、賢明さ、学識｜words of wisdom｜知恵の言葉
tax: 税金、～に税を課す｜pay tax｜税金を払う
evolution: 進化、発展｜human evolution｜人類の進化
barrier: 壁、障壁、防壁｜a language barrier｜言葉の壁
category: 範ちゅう、分類、カテゴリー｜fall into the category｜その範ちゅうに入る
unit: 単位、単元、部隊｜a unit of length｜長さの単位
reputation: 評判、名声｜a good reputation｜良い評判
virtue: 美徳、長所、効力｜a great virtue｜大きな美徳
courage: 勇気、度胸｜have the courage｜勇気がある
sympathy: 同情、共感、思いやり｜feel sympathy｜同情を感じる
union: 組合、連合、結合｜a labor union｜労働組合
civilization: 文明、文化的な生活｜ancient civilization｜古代文明
volume: 冊、巻、量、音量、体積｜a 10-volume dictionary｜10冊の辞書
blossom: (果樹などの)花、開花する、栄える｜cherry blossoms｜桜の花
era: 時代、年代｜a new era｜新しい時代
dispute: 紛争、論争、～を議論する、～に反論する｜settle a dispute｜紛争を解決する
tourism: 観光、観光事業｜the tourism industry｜観光産業
mankind: 人類、人間｜the history of mankind｜人類の歴史
murder: 殺人、～を殺害する｜commit murder｜殺人を犯す
landscape: 風景、景色、風景画｜a beautiful landscape｜美しい風景
destination: 目的地、行き先｜reach the destination｜目的地に着く
tale: 話、物語、作り話｜a fairy tale｜おとぎ話
reform: 改革、改善、～を改革する｜political reform｜政治改革
muscle: 筋肉、筋力、腕力｜leg muscles｜脚の筋肉
prospect: 見通し、見込み、将来性｜good prospects｜良い見通し
corporation: 企業、法人、株式会社｜a large corporation｜大企業
colony: 植民地、(動植物の)コロニー、群生｜a British colony｜イギリスの植民地
quarrel: 口論、口げんか、口論する｜have a quarrel｜口論する
profession: 職業、専門職、同業者仲間｜the medical profession｜医療の職業
aspect: 側面、局面、外観｜a positive aspect｜肯定的な側面
pause: 休止、間、ためらい、休止する｜a short pause｜短い休止
conflict: 対立、衝突、紛争、矛盾する｜a serious conflict｜深刻な対立
privilege: 特権、特典、名誉｜a special privilege｜特別な特権
prosperity: 繁栄、成功｜economic prosperity｜経済の繁栄
genius: 天才、天賦の才、特質｜a musical genius｜音楽の天才
seed: 種、種子、原因、～に種をまく｜plant a seed｜種をまく
symptom: 症状、兆候｜a symptom of a cold｜風邪の症状
merit: 長所、利点、価値｜a great merit｜大きな長所
layer: 層、重なり｜the ozone layer｜オゾン層
clue: 手がかり、糸口｜a clue to the mystery｜謎への手がかり
circumstances: 状況、事情、環境｜under the circumstances｜このような状況下で
district: 地区、地域、地方｜a commercial district｜商業地区
prison: 刑務所、拘置所｜go to prison｜刑務所に入る
companion: 仲間、連れ、伴侶｜a traveling companion｜旅の仲間
executive: 重役、幹部、執行部、実行力のある｜a top executive｜トップの重役
justice: 正義、公正、司法、裁判官｜a sense of justice｜正義感
procedure: 手続き、順序、手順｜a legal procedure｜法的な手続き
ray: 光線、放射線、一筋の光｜a ray of hope｜一筋の光線（希望の光）
heaven: 天国、天、(Heavensで)神｜go to heaven｜天国へ行く
luxury: 贅沢、高級品、贅沢な｜live in luxury｜贅沢に暮らす
oxygen: 酸素｜breathe oxygen｜酸素を呼吸する
fund: 資金、基金、(複数形で)財源、～に資金を提供する｜raise funds｜資金を集める
theme: 主題、テーマ、作文｜the main theme｜主な主題（テーマ）
boundary: 境界(線)、限界｜cross the boundary｜境界を越える
ambition: 熱望、野心、大望｜a great ambition｜大きな熱望
forecast: 予報、予測、～を予報する｜a weather forecast｜天気予報
psychology: 心理学、心理状態｜study psychology｜心理学を勉強する
labor: 労働、労働者、陣痛、働く｜hard labor｜激しい労働
committee: 委員会、委員｜the Olympic committee｜オリンピック委員会
physician: 医者、内科医｜a family physician｜かかりつけの医者
philosophy: 哲学、人生観、原理｜Greek philosophy｜ギリシャ哲学
affection: 愛情、愛着、好意｜deep affection｜深い愛情
candidate: 候補、候補者、志願者｜a presidential candidate｜大統領候補
bomb: 爆弾、～を爆撃する｜drop a bomb｜爆弾を落とす
priority: 優先事項、優先（権）、最優先｜top priority｜最優先
obstacle: 障害（物）、妨げ｜an obstacle to success｜成功への障害
appetite: 食欲、欲求、好み｜a good appetite｜良い食欲
tension: 緊張、不安、張り、電圧｜ease tension｜緊張を和らげる
tribe: 部族、種族、仲間｜a Native American tribe｜ネイティブアメリカンの部族
budget: 予算、経費、～を予算に組む｜an annual budget｜年間予算
campaign: （政治・宣伝などの）運動、キャンペーン、軍事行動｜an election campaign｜選挙運動（キャンペーン）
sorrow: 悲しみ、不幸、後悔｜express sorrow｜悲しみを表現する
satellite: 衛星、人工衛星、付随するもの｜an artificial satellite｜人工衛星
insight: 洞察（力）、見通し、理解｜have an insight｜洞察力がある
cough: せき、せきをする｜a bad cough｜ひどいせき
fate: 運命、宿命、死、破滅｜a cruel fate｜残酷な運命
scheme: 計画、枠組み、陰謀、～を企てる｜a new scheme｜新しい計画
insult: 侮辱、～を侮辱する｜an unforgivable insult｜許されない侮辱
inhabitant: 住民、居住者、生息動物｜local inhabitants｜地元の住民
fossil: 化石、時代遅れの人、化石の｜fossil fuels｜化石燃料
motive: 動機、目的、動機となった｜a hidden motive｜隠された動機
instinct: 本能、直感、天性｜human instinct｜人間の本能
legend: 伝説、言い伝え、伝説的有名人｜an ancient legend｜古代の伝説
empire: 帝国、巨大企業｜the Roman Empire｜ローマ帝国
suburb: 郊外、近郊｜live in the suburbs｜郊外に住む
architecture: 建築（様式）、構造、設計｜modern architecture｜現代建築
passion: 情熱、熱中、激怒｜a passion for music｜音楽への情熱
cancer: ガン、社会の害悪｜lung cancer｜肺ガン
logic: 論理、論理学、理屈｜basic logic｜基本的な論理
dozen: ダース（12個）、多数｜a dozen eggs｜1ダースの卵
harvest: 収穫（物）、収穫期、～を収穫する｜a good harvest｜良い収穫
ingredient: （料理の）材料、成分、要素｜a secret ingredient｜秘密の材料
hypothesis: 仮説、前提｜test a hypothesis｜仮説を検証する
voyage: 航海、船旅、空の旅｜a long voyage｜長い航海
editor: 編集者、校訂者｜a magazine editor｜雑誌の編集者
option: 選択肢、選択の自由｜have no option｜選択の自由がない
hemisphere: （地球・天体の）半球、脳半球｜the northern hemisphere｜北半球
mechanism: 仕組み、機構、装置、技法｜a defense mechanism｜防衛の仕組み
anthropologist: 人類学者｜a famous anthropologist｜有名な人類学者
tragedy: 悲劇、惨事｜a terrible tragedy｜ひどい悲劇
antibiotic: 抗生物質｜take antibiotics｜抗生物質を飲む
fare: （乗り物の）運賃、料金、料理｜pay the fare｜運賃を払う
debt: 借金、負債、恩義｜in heavy debt｜多額の借金をして
curriculum: 教育課程、カリキュラム｜a school curriculum｜学校の教育課程
component: 構成要素、成分、部品｜an essential component｜不可欠な構成要素
wheat: 小麦｜grow wheat｜小麦を育てる
usage: 語法、使用法、慣習｜modern usage｜現代の語法
castle: 城、邸宅｜an old castle｜古い城
famine: 飢饉、深刻な欠乏｜die of famine｜飢饉で死ぬ
extinction: 絶滅、消滅、消火｜face extinction｜絶滅に直面する
purse: 財布、ハンドバッグ、賞金｜a leather purse｜革の財布
folk: 民衆、人々、家族、民族の、民俗の｜folk music｜民族音楽
explosion: 爆発、急増、激増｜a loud explosion｜大きな爆発
portion: 部分、一部、分け前、1人前｜a large portion｜大きな部分
organism: 生物、有機体、組織体｜a living organism｜生きている生物
merchant: 商人、小売店主｜a wealthy merchant｜裕福な商人
myth: 神話、作り話、根拠のない社会通念｜a Greek myth｜ギリシャ神話
incident: 出来事、事件、紛争｜a strange incident｜奇妙な出来事
wildlife: 野生生物｜protect wildlife｜野生生物を保護する
congress: 議会、国会、会議｜the US Congress｜アメリカの議会
bay: 湾、入り江｜Tokyo Bay｜東京湾
penalty: 刑罰、罰、罰金、ペナルティ｜the death penalty｜死刑
heritage: 遺産、伝統｜cultural heritage｜文化遺産
diversity: 多様性、相違｜cultural diversity｜文化の多様性
thumb: 親指、～を親指で触れる｜bite my thumb｜親指をかむ
geography: 地理（学）、地形｜study geography｜地理を勉強する
factor: 要因、要素、指数｜an important factor｜重要な要因
discrimination: 差別、識別（力）、眼識｜racial discrimination｜人種差別
virus: ウイルス、病原体｜a computer virus｜コンピューターウイルス
statue: 像、彫像｜the Statue of Liberty｜自由の女神像
priest: 聖職者、司祭、神主｜a Catholic priest｜カトリックの神父
pioneer: 先駆者、開拓者、～を開拓する｜a pioneer of science｜科学の先駆者
trait: 特徴、特色、特性｜a personality trait｜性格の特徴
bond: きずな、結束、債券、契約、～を接合する｜a strong bond｜強いきずな
grocery: 食料品、食料雑貨店｜a grocery store｜食料品店
secretary: 秘書、長官、大臣、書記｜a private secretary｜個人秘書
dialect: 方言、なまり｜a local dialect｜地元の方言
astronomy: 天文学｜an astronomy class｜天文学の授業
youngster: 子供、若者｜a bright youngster｜賢い子供
substance: 物質、内容、本質、実体｜a chemical substance｜化学物質
finding: 発見（物）、（調査などの）結果、判決｜a new finding｜新しい発見
strategy: 戦略、計画｜an effective strategy｜効果的な戦略
lung: 肺｜healthy lungs｜健康な肺
opponent: （試合や討論の）相手、敵、反対者｜a tough opponent｜手ごわい敵
ritual: 儀式、習慣的行為、儀式の｜an ancient ritual｜古代の儀式
outcome: 結果、成果｜the final outcome｜最終的な結果
conservation: （自然環境などの）保護、保存、維持｜nature conservation｜環境保護
mammal: 哺乳類｜a marine mammal｜海の哺乳類
telescope: 望遠鏡｜look through a telescope｜望遠鏡をのぞく
refugee: 難民、亡命者｜a refugee camp｜難民キャンプ
code: 規則、規範、記号、暗号｜a dress code｜服装の規則
flavor: 風味、味、特色、～に風味をつける｜a sweet flavor｜甘い風味
particle: 粒子、ごく少量｜a dust particle｜ほこりの粒子
nursing: 看護、育児｜nursing care｜看護
suicide: 自殺｜commit suicide｜自殺する
habitat: 生息地、居住地｜a natural habitat｜自然の生息地
bullying: いじめ｜stop bullying｜いじめをやめる
dinosaur: 恐竜、古臭いもの｜dinosaur bones｜恐竜の骨
council: 議会、協議会、会議｜a city council｜市議会
gender: 性、性別｜gender equality｜性別の平等
surgery: 手術、外科、診療所｜undergo surgery｜手術を受ける
innovation: 革新、刷新、新機軸｜technological innovation｜技術の革新
protein: タンパク質｜high in protein｜タンパク質が豊富な
nutrition: 栄養、滋養物｜good nutrition｜良い栄養
disaster: 災害、惨事、完全な失敗｜a natural disaster｜自然災害
emission: 排出（物）、放射｜carbon dioxide emission｜二酸化炭素の排出
ape: 類人猿、～をまねる｜a great ape｜大型類人猿
molecule: 分子、微量｜a water molecule｜水の分子
sweat: 汗、汗をかく、～を搾取する｜wipe my sweat｜汗をふく
transplant: 移植、～を移植する、～を移住させる｜a heart transplant｜心臓移植
species: （動植物の）種、種類｜an endangered species｜絶滅危惧種
tip: 先（端）、チップ、秘訣、～を傾ける｜the tip of the finger｜指の先
cattle: （集合的に）牛、家畜｜raise cattle｜牛を飼う
density: 密度、密集、濃度｜population density｜人口密度
concept: 概念、観念、考え｜a basic concept｜基本的な概念
pale: 青白い、青ざめた、淡い｜look pale｜青白く見える
precious: 貴重な、高価な、尊い｜precious time｜貴重な時間
loyal: 忠実な、誠実な｜a loyal friend｜忠実な友人
isolated: 孤立している、隔離された、離れた｜an isolated village｜孤立している村
generous: 気前のよい、寛大な、たっぷりの｜a generous offer｜気前のよい申し出
tropical: 熱帯の、猛暑の｜a tropical rainforest｜熱帯雨林
reluctant: 気が進まない、しぶしぶの｜be reluctant to go｜行くのをしたがらない
vague: 漠然とした、あいまいな、ぼんやりした｜a vague answer｜漠然とした答え
vast: 広大な、莫大な、非常に広い｜a vast land｜広大な土地
numerous: たくさんの、数多くの｜numerous problems｜たくさんの問題
rural: 田舎の、農村の｜a rural area｜田舎の地域
widespread: 広まっている、広範囲にわたる｜widespread damage｜広まっている被害
complicated: 複雑な、込み入った｜a complicated problem｜複雑な問題
visible: 目に見える、明らかな｜visible to the naked eye｜肉眼で目に見える
raw: 生の、加工されていない、未経験の｜raw meat｜生の肉
remote: へんぴな、遠く離れた、わずかな｜a remote island｜へんぴな島
urgent: 緊急の、差し迫った、しつこい｜an urgent message｜緊急のメッセージ
silly: ばかな、愚かな、くだらない｜a silly mistake｜ばかな間違い
striking: 著しい、際立った、魅力的な｜a striking contrast｜いちじるしい対照
adequate: 十分な、適切な、まずまずの｜adequate preparation｜十分な準備
extraordinary: 並外れた、異常な、特命の｜an extraordinary talent｜並外れた才能
odd: 奇妙な、奇数の、半端な｜an odd number｜おかしな（奇数の）数
abstract: 抽象的な、～を抽出する、要約｜abstract art｜抽象的な芸術
mutual: 相互の、共通の｜mutual understanding｜相互の理解
excessive: 過度の、行き過ぎた｜excessive drinking｜過度の飲酒
ashamed: 恥じて、恥ずかしいと思う｜feel ashamed of...｜...を恥ずかしいと思う
tremendous: とてつもない、途方もない、すばらしい｜a tremendous effort｜とてつもない努力
inevitable: 避けられない、必然的な｜an inevitable result｜避けられない結果
pure: 純粋な、全くの、きれいな｜pure water｜純水（純粋な水）
stable: 安定した、しっかりした、馬小屋｜a stable condition｜安定した状態
indifferent: 無関心な、どうでもよい、平凡な｜be indifferent to politics｜政治に無関心だ
aggressive: 攻撃的な、積極的な｜aggressive behavior｜攻撃的な行動
ultimate: 究極の、最終の、最高の｜the ultimate goal｜究極の目標
shy: 内気な、恥ずかしがり屋の、臆病な｜a shy boy｜内気な少年
solar: 太陽の、太陽光線の｜solar energy｜太陽エネルギー
profound: 深い、重大な、難解な｜a profound impact｜深い影響
subtle: 微妙な、とらえがたい、巧妙な｜a subtle difference｜微妙な違い
conservative: 保守的な、控えめな、保守主義者｜a conservative politician｜保守の（保守的な）政治家
brave: 勇敢な、見事な｜a brave soldier｜勇敢な兵士
intense: 強烈な、激しい、熱心な｜intense heat｜強烈な熱さ
alcoholic: アルコールの、アルコール依存症の（人）｜an alcoholic drink｜アルコールの飲み物
manual: 手を使う、手動の、肉体労働の、マニュアル｜manual labor｜手を使う（肉体）労働
cruel: 残酷な、無残な、悲惨な｜cruel treatment｜残酷な扱い
rational: 理性的な、合理的な｜a rational decision｜理性的な決定
initial: 最初の、初期の、頭文字｜the initial stage｜最初の段階
immune: 免疫のある、免除された｜the immune system｜免疫システム
linguistic: 言語の、言語学の｜linguistic skills｜言語の技術
crucial: 決定的な、極めて重要な｜a crucial role｜重大な役割
verbal: 言葉による、口頭の｜verbal communication｜言葉によるコミュニケーション
optimistic: 楽観的な、楽天主義の｜an optimistic view｜楽観的な見方
flexible: 柔軟な、融通の利く、曲げやすい｜a flexible schedule｜柔軟なスケジュール
grateful: 感謝している、ありがたく思う｜be grateful to you｜あなたに感謝している
lively: 生き生きとした、活発な、にぎやかな｜a lively conversation｜生き生きとした会話
overwhelming: 圧倒的な、抵抗できない｜an overwhelming majority｜圧倒的な多数
abundant: 豊富な、あり余るほどの｜abundant resources｜豊富な資源
selfish: 利己的な、自分勝手な｜a selfish motive｜利己的な動機
ugly: みにくい、不快な、険悪な｜an ugly duckling｜みにくいアヒルの子
racial: 人種の、民族の｜racial discrimination｜人種の差別
prominent: 卓越した、有名な、目立った｜a prominent scientist｜有名な科学者
controversial: 論争を呼ぶ、物議を醸す｜a controversial issue｜物議を呼ぶ問題
federal: 連邦の、連邦政府の｜federal law｜連邦の法律
ridiculous: ばかげた、おかしな｜a ridiculous idea｜ばかげた考え
imaginary: 架空の、想像上の｜an imaginary friend｜架空の友達
harsh: 厳しい、残酷な、ざらざらした｜harsh reality｜厳しい現実
random: 無作為の、手当たり次第の｜in random order｜無作為な順序で
adolescent: 思春期の、青春期の、若者｜an adolescent boy｜思春期の少年
up-to-date: 最新の、現代的な｜up-to-date information｜最新の情報
liberal: 自由主義の、寛大な、気前が良い｜liberal ideas｜自由主義の考え
prior: 前の、先の、優先する｜prior notice｜前の（事前の）通知
moderate: 適度な、穏健な、～を和らげる｜moderate exercise｜適度な運動
fluent: 流ちょうな、雄弁な｜fluent English｜流ちょうな英語
elaborate: 手の込んだ、複雑な、詳しく述べる｜an elaborate design｜手の込んだデザイン
incredible: 信じられない、すばらしい｜an incredible story｜信じられない話
radical: 根本的な、過激な、急進的な｜a radical change｜根本的な変化
acid: 酸性の、酸っぱい、辛辣な、酸｜acid rain｜酸性の雨
deaf: 耳が不自由な、聞く耳を持たない｜a deaf person｜耳が不自由な人
medieval: 中世の、古くさい｜a medieval castle｜中世の城
ecological: 生態（学）の、環境保護の｜ecological balance｜生態のバランス
slight: わずかな、少しの、～を軽蔑する｜a slight fever｜少しの熱
ignorant: 無知な、知らない｜be ignorant of the fact｜事実に無知な
cognitive: 認知の、認識の｜cognitive ability｜認知能力
absolutely: 絶対に、完全に、まったく｜absolutely right｜絶対に正しい
virtually: 事実上、ほとんど、仮想的に｜virtually impossible｜ほとんど不可能だ
somewhat: いくらか、多少、やや｜somewhat different｜多少異なる
merely: 単に、～にすぎない｜merely an illusion｜単に錯覚にすぎない
literally: 文字通りに、文字通り｜literally true｜文字通り真実だ
seemingly: 一見、外見上は、どうやら｜seemingly impossible｜一見不可能に見える
regardless: （困難などに）関係なく、構わず｜regardless of age｜関係なく（年齢に関係なく）
thoroughly: 徹底的に、完全に、すっかり｜thoroughly investigate｜徹底的に調査する
submit: ～を提出する、～を服従させる、服従する｜submit a report｜報告書を提出する
tempt: ～を誘惑する、～を（…）する気にさせる｜tempt him to go｜彼に行くよう誘惑する
resign: 辞職する、～を辞任する、～を諦める｜resign from the job｜仕事を辞職する
conform: 従う、一致する、順応する｜conform to the rules｜規則に従う
confine: ～を限定する、～を閉じ込める｜confine him to the room｜彼を部屋に限定する（閉じ込める）
assemble: ～を集める、～を組み立てる、集まる｜assemble parts｜部品を組み立てる
dedicate: ～をささげる、～を専念させる｜dedicate his life to art｜芸術に彼の人生をささげる
advocate: ～を主張する、～を擁護する、提唱者｜advocate a new policy｜新しい政策を主張する
thrive: 繁栄する、よく育つ、成功する｜thrive on hard work｜一生懸命働いて繁栄する
provoke: ～を引き起こす、～を怒らせる、～を刺激する｜provoke anger｜怒りを引き起こす
dictate: ～を命じる、～を要求する、～を決定する、～を書き取らせる｜dictate the terms｜条件を要求する（決定する）
exploit: ～を利用する、～を開発する、～を搾取する｜exploit natural resources｜天然資源を開発する（利用する）
surrender: 降伏する、～を明け渡す、降伏｜surrender to the enemy｜敵に降伏する
reproduce: ～を再生する、～を複製する、繁殖する（させる）｜reproduce the results｜結果を再現する（再生する）
acknowledge: ～を認める、～に感謝する｜acknowledge the fact｜事実を認める
swell: ふくらむ、増大する、～をふくらませる｜swell with water｜水でふくらむ
shed: （涙・血など）を流す、（光・熱など）を発する、（葉など）を落とす｜shed tears｜涙を落とす
wind: 曲がる、～を巻く、風｜the river winds｜川が曲がる
cite: ～を引き合いに出す、～を引用する｜cite an example｜例を引き合いに出す
digest: ～を消化する、～を理解する、要約｜digest food｜食べ物を消化する
skip: ～をとばす、～を抜かす、軽く跳ぶ｜skip a meal｜食事をとばす
bind: ～を縛る、～を束縛する、～を義務付ける｜bind his hands｜彼の手を縛る
dissolve: ～を溶解する、～を解散する、溶ける｜dissolve sugar in water｜水に砂糖を溶解する
implement: ～を実行する、～を履行する、道具｜implement a plan｜計画を実行する
steer: ～を操縦する、～を導く｜steer a ship｜船を操縦する
congratulate: ～を祝福する、～にお祝いを言う｜congratulate him on his success｜彼の成功を祝福する
designate: ～を指定する、～を任命する｜designate an area｜地域を指定する
violate: ～を破る、～に違反する、～を侵害する｜violate the law｜法律に違反する
presume: ～を推定する、～だと思う、～を前提とする｜presume that it is true｜それは本当だと推定する
recruit: （新人を）入れる、～を募集する、新入生｜recruit new members｜新人を（入れて）募集する
coincide: 同時に起きる、重なる、一致する｜coincide with the event｜出来事と重なる（同時に起きる）
enforce: ～を施行する、～を強制する｜enforce the law｜法律を施行する
displace: ～にとってかわる、～を故郷から追い出す、～を移動させる｜displace the residents｜住民を故郷から追い出す
shrink: 縮む、減る、～を縮ませる｜clothes shrink｜服が縮む
betray: ～を裏切る、～をもらす｜betray a friend｜友達を裏切る
comprise: ～から構成される、～を構成する、～を占める｜comprise three parts｜3つの部分から構成される
indulge: ～にふける、～を甘やかす｜indulge in luxury｜贅沢にふける
penetrate: ～に入り込む、～を貫通する、～を見抜く｜penetrate the market｜市場に入り込む
devastate: ～を壊滅させる、～を悲嘆に暮れさせる｜devastate the city｜都市を壊滅させる
plunge: 突っ込む、陥る、～を突っ込む｜plunge into the water｜水に突っ込む
bounce: はね返る、弾む、～を弾ませる｜the ball bounces｜ボールがはね返る
contradict: ～と矛盾する、～に反論する｜contradict his statement｜彼の発言と矛盾する
prescribe: ～を処方する、～を規定する｜prescribe medicine｜薬を処方する
oppress: ～をしいたげる、～を圧迫する｜oppress the people｜人々をしいたげる
cherish: ～を胸に抱く、～を大切にする｜cherish the memory｜記憶を胸に抱く
illuminate: ～を照らす、～を解明する｜illuminate the room｜部屋を照らす
trigger: ～のきっかけになる、～を誘発する、引き金｜trigger an event｜出来事のきっかけになる
commute: 通勤する、通学する、通勤｜commute to work｜仕事に通勤する
induce: ～を誘う、～を引き起こす、～を説得する｜induce sleep｜眠りを誘う
utilize: ～を利用する、～を役立たせる｜utilize the facility｜施設を利用する
snap: ポキンと折れる、ポキンと折る、～をパチンと鳴らす｜snap a stick｜棒をポキンと折る
donate: ～を提供する、～を寄付する｜donate money｜お金を提供する
hatch: （卵・ヒナを）かえす、かえる、（悪巧みを）企てる｜eggs hatch｜卵がかえる
enclose: ～を囲む、～を同封する｜enclose a letter｜手紙を同封する（囲む）
prevail: 普及している、広まる、勝つ｜prevail in the country｜国中に広まる（普及している）
sigh: ため息をつく、ため息｜sigh deeply｜深くため息をつく
leak: 漏れる、～を漏らす、漏れ｜leak information｜情報を漏らす
compel: ～を強制する、～に強いる｜compel him to work｜彼に働くよう強制する
crush: ～を押しつぶす、～を弾圧する、激しい恋｜crush a can｜缶を押しつぶす
comprehend: ～を理解する、～を含む｜comprehend the meaning｜意味を理解する
negotiate: 交渉する、～を取り決める｜negotiate a price｜価格を交渉する
persist: 持続する、残る、固執する｜persist in his opinion｜彼の意見を固執（持続）する
multiply: ～を増やす、増える、～を掛ける｜multiply by two｜2を掛ける
conceive: ～を想像する、～を思いつく、妊娠する｜conceive an idea｜考えを想像する
compensate: ～を埋め合わせる、～に補償する｜compensate for the loss｜損失を埋め合わせる
suspend: ～を中止する、～をつるす、～を停学（停職）にする｜suspend the meeting｜会議を中止する
stir: ～をかき立てる、～をかき回す、騒ぎ｜stir the soup｜スープをかきたてる（かきまぜる）
soak: ～を浸す、びしょぬれにする、～を吸収する｜soak in water｜水に浸す
refine: ～を洗練する、～に磨きをかける、～を精製する｜refine oil｜油を洗練する
arouse: ～を刺激する、～をかき立てる、～を目覚めさせる｜arouse his interest｜彼の興味をかき立てる
precede: ～に先行する、～の前に起こる｜precede the meeting｜会議に先行する
render: OをCにする、～を変える、～を与える｜render him helpless｜彼を無力にする（変える）
mount: ～をすえつける、～に乗る、増加する｜mount a camera｜カメラをすえつける
retreat: 退く、撤退する、退却｜retreat from the enemy｜敵から退く
startle: ～を驚かせる、～をびっくりさせる｜startle the bird｜鳥を驚かせる
dare: あえて～する、～する勇気がある｜dare to go｜行く勇気がある
sphere: 領域、範囲、球（体）｜in the political sphere｜政治の領域で
sequence: 連続、順番、順序、場面｜a sequence of events｜一連の（連続の）出来事
deposit: 預金、頭金、堆積物、～を預ける｜deposit money in a bank｜銀行に預金する
poll: 世論調査、投票、～に世論調査をする｜a public opinion poll｜世論調査
caution: 用心、警告、～に警告する｜use with caution｜用心して使う
rage: 激怒、怒り、猛威を振るう｜fly into a rage｜激怒する
formula: 式、公式、方法、秘訣、解決策｜a chemical formula｜化学の公式
plot: 筋、たくらみ、陰謀、～を企む｜a complex plot｜複雑な筋
scope: 範囲、余地、視野｜beyond the scope｜範囲を超えて
norm: 規範、標準、基準｜social norm｜社会の規範
disgust: 嫌悪、～をむかつかせる｜feel disgust｜嫌悪を感じる
compromise: 妥協、妥協する、（名声など）を危うくする｜reach a compromise｜妥協に達する
supervisor: 監督者、管理者、指導教官｜a strict supervisor｜厳しい監督者
paradox: 逆説、矛盾、パラドックス｜a strange paradox｜奇妙な逆説
tissue: （生物の）組織、ティッシュペーパー｜human tissue｜人間の組織
breakdown: 崩壊、故障、衰弱｜a nervous breakdown｜神経衰弱（崩壊）
initiative: 主導権、自発性、新構想｜take the initiative｜主導権を握る
fabric: 織物、布、構造｜cotton fabric｜綿の織物
publicity: 宣伝、広告、知名度｜gain publicity｜宣伝を得る
summit: 頂上、頂点、首脳会議｜a summit meeting｜首脳会議
flock: 群れ、群がる｜a flock of birds｜鳥の群れ
plague: 疫病、災い、～を苦しめる｜the bubonic plague｜腺ペスト（疫病）
haste: 急ぐこと、急ぎ｜in haste｜急いで
nap: うたた寝、うたた寝をする｜take a nap｜うたた寝をする
ally: 同盟国、協力者、～と同盟を結ぶ｜a strong ally｜強力な同盟国
draft: 下書き、草稿、徴兵、～を起草する｜a rough draft｜下書き、草稿
spectacle: 光景、見世物、（複数形で）眼鏡｜a beautiful spectacle｜美しい光景
premise: 前提、根拠、（複数形で）敷地・建物｜a false premise｜間違った前提
asset: 財産、資産、価値のあるもの｜a valuable asset｜価値のある財産
lag: 遅れ、時間のズレ、遅れる｜a time lag｜時間の遅れ
therapy: 療法、治療、心理療法｜physical therapy｜物理療法、治療法
reception: もてなし、歓迎会、受付、受信状態｜a warm reception｜温かいもてなし
compound: 化合物、複合体、～を悪化させる、～を合成する｜a chemical compound｜化学化合物
blessing: ありがたいもの、恵み、祝福｜a great blessing｜大きなありがたいもの、恵み
sensation: 感覚、感じ、大評判｜a strange sensation｜奇妙な感覚、感じ
recession: 不景気、不況、後退｜an economic recession｜経済の不景気、不況
pole: 棒、柱、極（北極・南極など）｜the North Pole｜北極（棒、極）
outlook: 態度、考え方、見通し、見込み｜a positive outlook｜肯定的な態度、考え方、見通し、見込み
endeavor: 活動、試み、努力、～しようと努力する｜human endeavor｜人間の活動
mercy: 慈悲、情け、幸運｜beg for mercy｜慈悲、情けを乞う
counterpart: 相当するもの、対の片方、よく似た人｜a female counterpart｜女性の相当するもの
session: 期間、討論、集まり、（議会などの）会期｜a training session｜訓練の期間、討論
spectrum: 変動範囲、領域、スペクトル｜a broad spectrum｜広い変動範囲、領域
junk: くず、がらくた、ジャンク品｜junk food｜ジャンクフード（くず、がらくた）
worship: 崇拝、礼拝、～を崇拝する｜ancestor worship｜祖先崇拝
apt: ～しがちである、～する傾向がある、適切な｜apt to forget｜忘れがちである、する傾向がある
humble: 謙虚な、粗末な、卑しい、～をへりくだらせる｜a humble person｜謙虚な、粗末な人
entitled: （～を）得る権利がある、～と題された｜be entitled to vote｜投票する権利がある、題された
valid: 妥当な、正当な、有効な｜a valid reason｜妥当な、正当な理由
faint: かすかな、弱々しい、気絶する｜a faint sound｜かすかな音
stiff: 堅い、（筋肉が）凝った、堅苦しい｜a stiff neck｜凝った（堅い）首
obscure: わかりにくい、無名の、～を曖昧にする｜an obscure meaning｜わかりにくい意味
fierce: 激しい、獰猛な｜a fierce battle｜激しい戦い
acute: （問題が）深刻な、（感覚・痛みが）鋭い、急性の｜an acute pain｜（感覚・痛みが）鋭い、（問題が）深刻な痛み
idle: （仕事がなくて）何もしていない、怠惰な、無意味な｜idle time｜（仕事がなくて）何もしていない時間
crude: 粗末な、粗野な、天然のままの｜crude oil｜原油（粗末な、粗野な）
jealous: 嫉妬深い、羨ましい｜feel jealous｜嫉妬深い、羨ましいと感じる
pregnant: 妊娠している、意味深長な｜a pregnant woman｜妊娠している女性
liable: ～しがちである、～の可能性が高い、法的責任がある｜liable to make mistakes｜間違いをしがちである、可能性が高い
stubborn: 頑固な、断固とした｜a stubborn old man｜頑固な老人
decent: まともな、きちんとした、上品な｜a decent job｜まともな仕事
marvelous: 驚くべき、すばらしい｜a marvelous idea｜驚くべき考え
misleading: 誤解を招く、紛らわしい｜misleading information｜誤解を招く情報
synthetic: 合成の、人工の｜synthetic fiber｜合成の繊維
classical: クラシックの、古典的な｜classical music｜クラシックの音楽
Muslim: イスラム教の、イスラム教徒｜a devout Muslim｜敬虔なイスラム教の信者
anticipate: ～を予想する、～を期待する｜anticipate the future｜未来を予想する
rub: ～をこする、～を摩擦する｜rub my eyes｜目をこする
dispose: ～を処理する、～を配置する｜dispose of garbage｜ゴミを処理する
refrain: ～を控える、～をやめる｜refrain from smoking｜喫煙を控える
accumulate: ～を蓄積する、たまる｜accumulate wealth｜富を蓄積する
boost: ～を活気づける、～を押し上げる、増加｜boost sales｜売り上げを活気づける
drag: ～を引きずる、ぐずぐずする｜drag a heavy bag｜重いバッグを引きずる
revise: ～を修正する、～を改訂する｜revise a plan｜計画を修正する
scratch: ～をかく、～を引っかく、引っかき傷｜scratch the surface｜表面をかく
roar: ほえる、とどろく、ほえ声｜lions roar｜ライオンがほえる
quote: ～を引用する、～を見積もる｜quote a famous phrase｜有名な文句を引用する
bloom: 咲く、栄える、花｜flowers bloom｜花が咲く
insert: ～を差し込む、～を挿入する｜insert a coin｜コインを差し込む
awaiting: ～を待つ｜awaiting his reply｜彼の返事を待つ
dread: ～を恐れる、恐怖｜dread the future｜未来を恐れる
conceal: ～を隠す、～を秘密にする｜conceal the truth｜真実を隠す
enrich: ～を豊かにする、～を濃縮する｜enrich my life｜私の人生を豊かにする
cling: 固執する、しがみつく｜cling to the past｜過去に固執する
surpass: ～にまさる、～を越える｜surpass expectations｜期待にまさる
suppress: ～を抑える、～を鎮圧する｜suppress his anger｜彼の怒りを抑える
portray: ～を描く、～を演じる｜portray a character｜人物を描く
soaring: 急上昇する、舞い上がる｜soaring prices｜急上昇する価格
drain: ～を排出する、～の水を抜く、排水溝｜drain water｜水を排出する
glow: ボーッと光る、白熱する、白熱｜glow in the dark｜暗闇でボーッと光る
migrate: 移住する、渡る｜migrate to the south｜南へ移住する
exclaim: 叫ぶ、大声で言う｜exclaim in surprise｜驚いて叫ぶ
exert: （力など）を及ぼす、～を行使する｜exert influence｜影響を及ぼす
disguise: ～を隠す、～を変装させる、変装｜disguise as a man｜男に変装する（隠す）
accelerate: ～を加速する、促進する｜accelerate the speed｜速度を加速する
dwell: 住む、暮らす｜dwell in the city｜都市に住む
integrate: ～を融けこませる、～を統合する｜integrate into society｜社会に融けこませる
weep: 泣く、涙を流す｜weep bitterly｜激しく泣く
reassure: ～を安心させる、～を元気づける｜reassure a child｜子供を安心させる
crawl: はって進む、這う｜crawl on the floor｜床をはって進む
restrain: ～を抑制する、～を制止する｜restrain my anger｜怒りを抑制する
resent: ～に腹を立てる、～を憤る｜resent his words｜彼の言葉に腹を立てる
yell: 大声で叫ぶ、わめく声｜yell at him｜彼に向かって大声で叫ぶ
assess: ～を評価する、～を査定する｜assess the value｜価値を評価する
carve: ～を彫る、～を切り開く｜carve wood｜木を彫る
halt: ～を止める、停止する、停止｜halt production｜生産を止める
inspect: ～を検査する、～を視察する｜inspect a car｜車を検査する
tackle: ～に取り組む、タックルする｜tackle a problem｜問題に取り組む
omit: ～を省く、～を怠る｜omit details｜詳細を省く
chew: ～をかむ、咀嚼する｜chew gum｜ガムをかむ
resume: ～を再開する、再び始める、履歴書（レジュメ）｜resume the meeting｜会議を再開する
mold: ～を作る、～を型に入れる、型、カビ｜mold clay｜粘土で作る
accommodate: ～を収容できる、～を適応させる｜accommodate guests｜客を収容できる
erase: ～を消す、～を消去する｜erase the memory｜記憶を消す
inferred: ～を推量する｜inferred from the context｜文脈から推量する
revive: ～を生き返らせる、よみがえる｜revive the economy｜経済を生き返らせる
contemplate: ～を考える、～を熟考する｜contemplate the future｜未来を考える
rotate: ～を回転する、交替する｜rotate the tires｜タイヤを回転する
disrupt: ～をかき乱す、～を崩壊させる｜disrupt the meeting｜会議をかき乱す
navigate: ～の進路を決める、～を航行する｜navigate a ship｜船の進路を決める
ache: 痛む、痛み｜my stomach aches｜胃が痛む
discard: ～を捨てる、～を放棄する｜discard old clothes｜古い服を捨てる
incorporate: ～を取り入れる、～を法人にする｜incorporate a new idea｜新しい考えを取り入れる
overtake: ～を追い越す、～に追いつく｜overtake a car｜車を追い越す
supplement: ～を補う、～に補充する、補給、付録、サプリメント｜take a supplement｜～を補う
manipulate: ～を操作する、～を巧みに扱う、～を改ざんする｜manipulate data｜データを操作する
nourish: ～を養う、～に滋養分を与える、（感情・希望など）を抱く｜nourish the body｜体を養う
squeeze: ～をしぼる、～を強く握る、～を詰め込む、搾り出すこと｜squeeze a lemon｜レモンをしぼる
depict: ～を描く、～を描写する｜depict a scene｜場面を描く
distract: （注意・心など）をそらす、～を散らす、～を紛らす｜distract his attention｜彼の注意をそらす
disclose: ～を暴露する、～を明らかにする、～を公開する｜disclose a secret｜秘密を暴露する
enroll: 入学する、登録する、～を入会させる｜enroll in a college｜大学に入学する
nurture: ～を育てる、～を養育する、～を育む、養育、教育｜nurture a child｜子供を育てる
speculate: 推測する、投機する、～を思索する｜speculate about the future｜未来について推測する
prolong: ～を延ばす、～を延長する｜prolong life｜寿命を延ばす
execute: ～を処刑する、～を実行する、～を遂行する｜execute a prisoner｜囚人を処刑する
uncover: ～を明らかにする、～の覆いを取る、～を掘り出す｜uncover the truth｜真実を明らかにする
tremble: 震える、武者震いする、震え｜tremble with fear｜恐怖で震える
seize: ～をつかむ、～を強奪する、～を差し押さえる｜seize the opportunity｜機会をつかむ
abolish: ～を廃止する、～を撤廃する｜abolish the system｜制度を廃止する
scold: ～をしかる｜scold a child｜子供をしかる
attain: ～を達成する、～に到達する、～を獲得する｜attain a goal｜目標を達成する
utter: （言葉など）を発する、～を述べる、全くの、完全な｜utter a word｜言葉を発する
flee: 逃げる、避ける、～から逃れ去る｜flee from danger｜危険から逃げる
offending: 怒らせる、不快な、罪を犯している（offend: ～を怒らせる）｜an offending remark｜怒らせる発言
confess: ～を告白する、～を白状する、～を認める｜confess a crime｜犯罪を告白する
postpone: ～を延期する、～を後回しにする｜postpone a meeting｜会議を延期する
drift: 漂う、さ迷う、流される、漂流、傾向｜drift in the sea｜海を漂う
weave: ～を織る、～を編む、～を縫うように進む｜weave cloth｜布を織る
install: ～を備えつける、～を設置する、～を就任させる｜install software｜ソフトウェアを備えつける
twist: ～をねじ曲げる、～をひねる、～をゆがめる、ひねり｜twist an arm｜腕をねじ曲げる
extract: ～を取り出す、～を抽出する、～を引用する、抽出物｜extract a tooth｜歯を取り出す
bump: ぶつかる、～をぶつける、衝突（音）、（路面の）隆起｜bump into a friend｜友達にぶつかる
despise: ～を軽蔑する、～をひどく嫌う｜despise a coward｜臆病者を軽蔑する
tolerate: ～を我慢する、～を許容する、～に耐える｜tolerate pain｜痛みを我慢する
boast: 自慢する、～を誇りにする、自慢（の種）｜boast about success｜成功を自慢する
flourishing: 栄えている、繁栄している（flourish: 繁栄する）｜a flourishing business｜栄えているビジネス
disregard: ～を無視する、～を軽視する、無視、軽視｜disregard a warning｜警告を無視する
tease: ～をからかう、～をいじめる、～をじらす｜tease a friend｜友達をからかう
reinforce: ～を強める、～を補強する、～を増強する｜reinforce a building｜建物を強める
strive: 努力する、励む、抗争する｜strive for success｜成功に向けて努力する
coordinate: ～を合わせる、～を調整する、～を調和させる、同等の｜coordinate movements｜動きを合わせる
yawn: あくびをする、あくび｜give a big yawn｜大きなあくびをする
hug: ～を抱きしめる、抱擁｜hug a child｜子供を抱きしめる
combat: ～と戦う、～に立ち向かう、戦闘、対立｜combat disease｜病気と戦う
knit: ～を編む、～を結合する、編み物｜knit a sweater｜セーターを編む
fatigue: 疲労、疲れ、～を疲れさせる｜feel extreme fatigue｜極度の疲労を感じる
fame: 名声、高名｜achieve fame｜名声を得る
mess: めちゃくちゃな状態、混乱、困った状況、～を散らかす｜in a mess｜めちゃくちゃで
dignity: 尊厳、威厳、気品｜human dignity｜人間の尊厳
canal: 運河、人工水路、（体内の）管｜the Panama Canal｜パナマ運河
drought: 干ばつ、日照り、慢性的な不足｜a severe drought｜厳しい干ばつ
despair: 絶望、～に絶望する｜in deep despair｜深い絶望の中で
interval: 間隔、合間、休憩時間｜a short interval｜短い間隔
luggage: 荷物、旅行用手荷物｜carry luggage｜荷物を運ぶ
behalf: （on behalf ofで）～を代表して、～に代わって、～のために｜on behalf of the company｜会社を代表して
impulse: 衝動、はずみ、刺激｜a sudden impulse｜突然の衝動
debris: 破片、がれき、残骸｜space debris｜宇宙の破片
beast: 野獣、けだもの、動物｜a wild beast｜野生の野獣
superstition: 迷信｜a foolish superstition｜愚かな迷信
illusion: 幻想、錯覚、思い込み｜an optical illusion｜目の錯覚、幻想
thread: 糸、筋道、～に糸を通す｜cotton thread｜綿の糸
intake: 摂取量、取り入れ、吸い込み｜calorie intake｜カロリーの摂取量
feast: 宴会、祝宴、ごちそう、～を大いにもてなす｜a wedding feast｜結婚の宴会
transition: 移り変わり、変遷、過渡期｜transition to adulthood｜大人への移り変わり
misery: 悲惨さ、不幸、苦痛｜a life of misery｜悲惨さに満ちた生活
radiation: 放射、放射線、放射能｜exposure to radiation｜放射線への被曝
log: 丸太、記録、～を記録する｜a wooden log｜木製の丸太
consensus: 合意、一致した意見｜reach a consensus｜合意に達する
deed: 行い、行為、実行｜a good deed｜良い行い
proverb: ことわざ、格言｜an old proverb｜古いことわざ
compliment: ほめ言葉、賛辞、～をほめる、～に敬意を表す｜pay a compliment｜ほめ言葉を述べる
flame: 炎、情熱、～を燃え上がらせる｜a bright flame｜明るい炎
anniversary: 記念日、～周年｜a wedding anniversary｜結婚記念日
conscience: 良心、道徳心｜a clear conscience｜やましいことのない良心
expedition: 探検、遠征、探検隊｜an Antarctic expedition｜南極探検
offspring: 子孫、（動物の）子、成果｜produce offspring｜子孫を残す
allowance: こづかい、手当、許容量、考慮｜a monthly allowance｜毎月のこづかい
headline: 大見出し、～を大きく扱う｜a newspaper headline｜新聞の大見出し
treaty: 条約、協定｜a peace treaty｜平和条約
monument: 記念碑、遺跡、不朽の業績｜a stone monument｜石の記念碑
worm: 虫（ミミズ、毛虫など）、虫けら｜an earth worm｜ミミズ（虫）
remedy: 治療法、救済策、～を改善する｜an effective remedy｜効果的な治療法
encyclopedia: 百科事典｜an online encyclopedia｜オンラインの百科事典
glimpse: ちらりと見えること、一瞥、～をちらりと見る｜catch a glimpse｜ちらりと見る
personnel: 職員、社員、人事部｜medical personnel｜医療の職員
triumph: 勝利、大成功、勝利を収める｜a great triumph｜大きな勝利
arithmetic: 算数、計算｜mental arithmetic｜暗算（算数）
self-esteem: 自尊心、自己評価｜low self-esteem｜低い自尊心
microbe: 微生物、細菌｜a harmful microbe｜有害な微生物
odds: 可能性、確率、勝ち目、不和｜against all odds｜あらゆる可能性に逆らって
chaos: 混沌、大混乱｜in total chaos｜完全な混沌の中で
destiny: 運命、宿命｜control one's destiny｜運命を操る
diameter: 直径｜the diameter of a circle｜円の直径
lottery: 宝くじ、抽選、運任せのこと｜win the lottery｜宝くじに当たる
souvenir: みやげ物、記念品｜buy a souvenir｜みやげ物を買う
trail: 小道、跡、～を追跡する｜a mountain trail｜山の小道
ratio: 比率、割合｜the ratio of men to women｜男女の比率
sword: 剣、刀、武力｜draw a sword｜剣を抜く
whistle: 笛、口笛、汽笛、～を吹く｜blow a whistle｜笛を吹く
sentiment: 感情、情緒、所感｜public sentiment｜大衆の感情
chore: 雑用、日課、嫌な仕事｜a daily chore｜毎日の雑用
courtesy: 礼儀、親切、優遇｜common courtesy｜一般的な礼儀
mayor: 市長、町長｜the mayor of a city｜市の市長
surveillance: 監視、見張り、査察｜under surveillance｜監視、見張りの下で
trash: ごみ、がらくた、～を破壊する｜throw away trash｜ごみを捨てる
prestige: 名声、威信、威信のある｜gain prestige｜名声を得る
headquarters: 本部、本社、司令部｜the company headquarters｜会社の本部、本社
wilderness: 荒野、大自然、荒れ地｜in the wilderness｜荒野で
orbit: 軌道、活動範囲、～の軌道を回る｜enter an orbit｜軌道に入る
bias: 偏見、先入観、偏り｜have a bias｜偏見を持つ
republic: 共和国、共和制｜an independent republic｜独立した共和国
bargain: 掘り出し物、お買い得品、取引、交渉する｜a good bargain｜良い掘り出し物
domain: 領域、領地、ドメイン｜the domain of science｜領域（科学の領域）
fragment: 破片、かけら、断片｜a bone fragment｜骨の破片
galaxy: 星雲、銀河、華やかな集まり｜a distant galaxy｜遠くの星雲
lap: ひざ、（競技の）1周、～を包む｜sit on my lap｜私のひざに座る
deadline: 締め切り、期限｜meet the deadline｜締め切りに間に合わせる
bullet: 弾丸、銃弾｜fire a bullet｜弾丸を撃つ
pedestrian: 歩行者、歩行者の、単調な｜a pedestrian crossing｜歩行者（用横断歩道）
wit: 機知、とんち、機知に富む人｜full of wit｜機知に富んだ
nuisance: 迷惑（な人・事）、厄介なもの｜a public nuisance｜公共の迷惑
criteria: （判断の）基準、尺度（criterionの複数形）｜strict criteria｜厳しい基準
hardship: 苦難、困窮、苦労｜endure hardship｜苦難に耐える
glory: 栄光、名誉、全盛｜achieve glory｜栄光を達成する
pavement: 歩道、舗装道路｜walk on the pavement｜歩道を歩く
navy: 海軍、濃紺色（ネイビーブルー）｜join the navy｜海軍に入る
script: 台本、脚本、手書き（の文字）｜read a script｜台本を読む
pension: 年金、恩給、ペンション｜receive a pension｜年金を受け取る
province: 州、省、地方、分野｜a Canadian province｜カナダの州
surplus: 余剰、黒字、余りの｜a trade surplus｜貿易の余剰（黒字）
moisture: 水分、湿気、水蒸気｜absorb moisture｜水分を吸収する
patch: あて布、継ぎ当て、小さな区画、～に継ぎを当てる｜a black patch｜黒いあて布
altitude: 高度、標高、海抜｜at a high altitude｜高い高度、標高で
thermometer: 温度計、体温計｜a digital thermometer｜デジタルの温度計
tuition: 授業料、指導、教授｜pay tuition｜授業料を払う
troop: （～sで）軍隊、部隊、群れ｜dispatch a troop｜軍隊を派遣する
primate: 霊長類、大主教｜a large primate｜大型の霊長類
flaw: 欠陥、傷、ひび｜a fatal flaw｜致命的な欠陥
nephew: 甥（おい）｜my little nephew｜私の幼い甥
garment: （1点の）衣服、衣類｜a silk garment｜絹の衣服、衣類
diagnosis: 診断、診察、判断｜a medical diagnosis｜医学的な診断
commerce: 商業、貿易、通商｜international commerce｜国際的な商業
antiquity: 古代、大昔、古物｜objects of antiquity｜古代、古物の品々
fraction: ほんの一部、わずか、分数｜a small fraction｜ほんの一部
irony: 皮肉、反語、皮肉な事態｜a touch of irony｜少しの皮肉
nightmare: 悪夢、恐ろしい経験｜a terrible nightmare｜恐ろしい悪夢
defect: 欠陥、不足、逃亡する｜a genetic defect｜遺伝的な欠陥
certificate: 証明書、免許状、～を証明する｜a birth certificate｜出生証明書
decay: 腐敗、衰退、腐る、衰える｜tooth decay｜歯の腐敗（虫歯）
erosion: 浸食（作用）、崩壊｜soil erosion｜土壌の浸食
recipe: 調理法（レシピ）、秘けつ、原因｜a secret recipe｜秘密の秘けつ（レシピ）
skeleton: 骨格、骸骨、概略｜a human skeleton｜人間の骨格
grace: 優雅さ、気品、神の恵み、猶予｜move with grace｜優雅さに（優雅に）動く
landmark: 名所、目印、画期的な出来事｜a famous landmark｜有名な名所
dementia: 認知症｜suffer from dementia｜認知症を患う
flesh: （人間・動物の）肉、果肉、肉体｜human flesh｜人間の肉
collision: 衝突、激突、対立｜a traffic collision｜交通の衝突、対立
hazard: 危険（なもの）、偶然、～を危険にさらす｜a health hazard｜健康への危険なもの
tomb: 墓、墓石｜an ancient tomb｜古代の墓
injection: 注射、注入｜give an injection｜注射を打つ
breakthrough: 飛躍的進歩、突破口｜a major breakthrough｜主要な飛躍的進歩
leather: 革、皮革製品、革製の｜a leather jacket｜革のジャケット
jewelry: （集合的に）宝石類、アクセサリー｜expensive jewelry｜高価な宝石
cue: 合図、手がかり、キュー｜take a cue｜合図を受け取る
ambulance: 救急車｜call an ambulance｜救急車を呼ぶ
estate: 不動産、財産、私有地｜real estate｜不動産
commodity: 日用品、商品、産物｜an important commodity｜重要な商品
departure: 出発、旅立ち、方針からの逸脱｜time of departure｜出発の時間
phase: 段階、局面、相｜the final phase｜最終の段階
thief: 泥棒、空き巣｜catch a thief｜泥棒を捕まえる
saint: 聖人、聖～、立派な人｜a patron saint｜守護の聖（聖人）
sculpture: 彫刻（作品）、～を彫刻する｜a stone sculpture｜石の彫刻
grief: 深い悲しみ、悲痛、苦悩｜feel deep grief｜深い悲しみを感じる
lane: 車線、小道、路地｜a narrow lane｜狭い車線
predator: 捕食動物、略奪者｜a dangerous predator｜危険な捕食動物
fluid: 流体、液体、流動的な、なめらかな｜drink plenty of fluid｜たっぷりの流体（水分）を飲む
incentive: 励み、動機、報奨金｜a strong incentive｜強いはげみ
bride: 花嫁、新婦｜a beautiful bride｜美しい花嫁
intervention: 介入、干渉、仲裁｜medical intervention｜医療の介入
margin: 差、余白、縁、利益の幅｜a narrow margin｜わずかな差
biography: 伝記、一代記｜read a biography｜伝記を読む
consent: 同意、承諾、同意する｜give consent｜同意を与える
volcano: 火山｜an active volcano｜活火山
rebel: 反逆者、反乱軍、反逆する、反抗する｜a young rebel｜若い反逆者
metaphor: 隠喩（メタファー）、比喩｜use a metaphor｜比喩を使う
legislation: 法律、立法（措置）｜pass legislation｜法律を通過させる
lightning: 稲妻、雷（光）、電光石火の｜a flash of lightning｜稲妻（雷）のきらめき
pesticide: 殺虫剤、農薬｜use pesticide｜殺虫剤を使う
column: コラム（定期寄稿欄）、円柱、縦の列｜a newspaper column｜新聞のコラム
rumor: うわさ、風評、～と噂されている｜spread a rumor｜うわさを広める
dust: ほこり、ちり、～のほこりを払う｜sweep the dust｜ほこりを掃く
dialogue: 対話、会話、意見の交換｜an open dialogue｜開かれた対話
kindergarten: 幼稚園｜go to kindergarten｜幼稚園に行く
diabetes: 糖尿病｜suffer from diabetes｜糖尿病を患う
obesity: （病的な）肥満｜childhood obesity｜子供の肥満
patent: 特許（権）、特許品、明白な｜apply for a patent｜特許を申請する
chapter: （書物の）章、区切り、支部｜the first chapter｜最初の章
palace: 宮殿、大邸宅、立派な建物｜a royal palace｜王族の宮殿
laundry: 洗濯（物）、クリーニング店｜do the laundry｜洗濯をする
ward: 病棟、行政区、被後見人｜a hospital ward｜病院の病棟
outbreak: （病気・戦争などの）ぼっ発、発生｜an outbreak of war｜戦争のぼっ発
equation: 方程式、等式、同一視｜solve an equation｜方程式を解く
archaeologist: 考古学者｜a famous archaeologist｜有名な考古学者
corruption: 腐敗、汚職、堕落、(データの)壊れ｜political corruption｜政治の腐敗
germ: 細菌、ばい菌、(物事の)兆し、胚｜a deadly germ｜致命的な細菌
revenue: (国・自治体の)歳入、収益、所得｜tax revenue｜税収入
spouse: 配偶者(夫または妻)｜a surviving spouse｜生き残った配偶者
epidemic: (病気の)流行、伝染病、(悪いことの)蔓延｜a flu epidemic｜インフルエンザの流行
mortality: 死亡率、死ぬ運命、死すべきもの｜infant mortality｜幼児の死亡
syndrome: 症候群、シンドローム、一連の兆候｜Down syndrome｜ダウン症候群
retail: 小売り、小売りで売る、～を小売りする｜a retail store｜小売り店
dose: (薬の1回分の)服用量、～に薬を飲ませる｜a lethal dose｜致死量
beverage: (水以外の)飲み物、飲料｜a cold beverage｜冷たい飲み物
metabolism: 新陳代謝、代謝作用｜fast metabolism｜早い新陳代謝
hybrid: 交配種、混合物、ハイブリッド車｜a hybrid car｜交配種（ハイブリッド）の車
scent: 香り、匂い、香水、～を嗅ぎつける｜a sweet scent｜甘い香り
inflammation: 炎症、点火、燃焼｜reduce inflammation｜炎症を減らす
pill: 錠剤、飲み薬、ピル(経口避妊薬)｜a sleeping pill｜睡眠薬
grave: 重大な、深刻な、厳粛な、墓｜a grave responsibility｜重大な責任
fertile: (土地が)肥えた、多産な、創造力豊かな｜fertile soil｜肥えた土壌
hostile: 敵意のある、敵対する、(状況などが)厳しい｜a hostile attitude｜反感を持つ態度
indispensable: 不可欠な、なしでは済ませられない｜an indispensable role｜不可欠な役割
oriented: ～志向の、～を向いた、関心を向けている｜family-oriented｜家族志向の
splendid: すばらしい、豪華な、輝かしい｜a splendid view｜すばらしい景色
competent: 有能な、適任の、十分な能力がある｜a competent worker｜有能な労働者
supreme: 最高の、至高の、究極の｜the supreme court｜最高の裁判所
straightforward: わかりやすい、率直な、真っ直ぐな｜a straightforward answer｜わかりやすい答え
sacred: 聖なる、神聖な、宗教的な｜a sacred place｜聖なる場所
bold: 大胆な、勇敢な、(線・文字が)太い｜a bold decision｜大胆な決定
uneasy: 不安な、落ち着かない、ぎこちない｜feel uneasy｜不安な気分になる
neat: きちんとした、整った、(お酒が)ストレートの｜a neat desk｜きちんとした机
shallow: 浅い、浅はかな、(呼吸が)浅い｜a shallow river｜浅い川
fake: 偽物の、模造の、偽物、～を偽造する｜a fake diamond｜偽物のダイヤモンド
superficial: 表面的な、うわべだけの、浅薄な｜a superficial wound｜表面的な傷
absurd: ばかげた、不条理な、滑稽な｜an absurd idea｜ばかげた考え
fragile: 壊れやすい、虚弱な、はかない｜a fragile glass｜壊れやすいグラス
respectable: ちゃんとした、立派な、かなりの｜a respectable job｜ちゃんとした仕事
magnificent: すばらしい、壮大な、格調高い｜a magnificent building｜すばらしい建物
infinite: 無限の、莫大な、無数の｜infinite space｜無限の空間
comprehensive: 包括的な、広範囲にわたる、理解力のある｜a comprehensive plan｜包括的な計画
steep: (坂などが)険しい、急激な、(価格が)法外に高い｜a steep hill｜険しい丘
gross: 総計の、全体の、ひどい、(容姿などが)気持ち悪い｜gross income｜総収入
subsequent: 次に起こる、その後の、続いて｜subsequent events｜次に起こる出来事
sincere: 心からの、誠実な、偽りのない｜a sincere apology｜心からの謝罪
toxic: 有毒な、中毒性の、毒物｜a toxic chemical｜有毒な化学物質
neutral: 中立の、はっきりしない、(ギアが)ニュートラル｜a neutral country｜中立の国
diligent: 勤勉な、熱心な｜a diligent student｜勤勉な生徒
sore: 痛い、触れると痛い、悲しみ｜a sore throat｜痛い喉
contaminated: 汚染された、汚れた｜contaminated water｜汚染された水
ambiguous: あいまいな、多義的な、不確かな｜an ambiguous reply｜あいまいな返事
oral: 口頭の、口述の、口の｜an oral examination｜口述の試験
restless: 落ち着かない、絶え間ない、眠れない｜a restless night｜落ち着かない夜
rotten: 腐った、不潔な、不快な｜a rotten apple｜腐ったリンゴ
vigorous: 精力的な、活発な、強健な｜a vigorous exercise｜精力的な運動
immense: 莫大な、巨大な、広大な｜an immense amount｜莫大な量
metropolitan: 大都市の、首都圏の｜a metropolitan area｜大都市の地域
punctual: 時間をきっちり守る、素早い｜a punctual person｜時間をきっちり守る人
solitary: 孤独な、ただ一つの、人里離れた｜a solitary life｜孤独な生活
collective: 集団の、共同の、蓄積された｜collective responsibility｜集団の責任
diplomatic: 外交の、外交官の、駆け引きの上手な｜diplomatic relations｜外交の関係
nasty: 不快な、嫌な、意地悪な、えぐい｜a nasty smell｜不快なにおい
helpless: 無力な、どうしようもない、頼りない｜a helpless baby｜無力な赤ん坊
explicit: 明確な、はっきりした、露骨な｜explicit instructions｜明確な、はっきりした指示
bankrupt: 破産した、欠乏している、破産者｜go bankrupt｜破産した状態になる
eternal: 永遠の、不変の、果てしない｜eternal life｜永遠の命
sole: 唯一の、独占的な、足の裏｜the sole survivor｜唯一の生存者
sour: すっぱい、不機嫌な、(関係などが)悪くなる｜a sour lemon｜すっぱいレモン
notable: 注目すべき、著名な、重要な｜a notable achievement｜注目すべき達成
affluent: 裕福な、豊富な、流暢な｜an affluent society｜裕福な社会
naked: 裸の、むき出しの、ありのままの｜with the naked eye｜裸の目で
vocal: 発声の、声の、(意見などを)うるさく言う｜vocal cords｜発声の器官
feminine: 女性の、女性らしい｜a feminine voice｜女性の（女らしい）声
vacant: 空いている、(役職が)欠員の、ぼんやりした｜a vacant seat｜空いている席
exotic: 外来の、異国情緒のある、風変わりな｜exotic plants｜外来の植物
rigid: 厳格な、硬直した、曲がらない｜rigid rules｜厳格な規則
humid: 蒸し暑い、湿り気のある｜humid weather｜蒸し暑い天気
outstanding: 傑出した、目立った、未払いの｜outstanding performance｜傑出した演技
addicted: 中毒である、～に夢中になっている｜addicted to drugs｜薬に中毒である
vulnerable: 影響を受けやすい、傷つきやすい、脆弱な｜vulnerable to disease｜病気を受けやすい
spontaneous: 自然に起こる、自発的な、のびのびとした｜spontaneous applause｜自然に起こる拍手
greedy: 貪欲な、食いしん坊の｜greedy for money｜お金に貪欲な
trivial: ささいな、ありふれた、取るに足りない｜a trivial matter｜ささいな問題
per capita: 一人当たりの｜per capita income｜一人当たりの収入
inherent: 元から伴う、固有の、本来備わっている｜inherent rights｜元から伴う権利
promising: 前途有望な、見込みのある｜a promising future｜前途有望な未来
physiological: 生理的な、生理学上の｜a physiological reaction｜生理的な反応
clinical: 臨床の、病院の、客観的で冷淡な｜a clinical trial｜臨床試験
chronic: 慢性の、長期にわたる、持病持ちの｜a chronic disease｜慢性の病気
geological: 地質学的な、地質の｜a geological survey｜地質学的な調査
countless: 無数の、数え切れない｜countless stars｜無数の星
innate: 先天的な、生まれつきの、固有の｜an innate ability｜先天的な能力
alert: 用心深い、機敏な、～に警告を出す、警報｜stay alert｜用心する
autonomous: 自主的な、自治権のある、自動運転の｜an autonomous vehicle｜自動運転の車
simultaneously: 同時に、一斉に｜happen simultaneously｜同時に起こる
utterly: まったく、完全に｜utterly destroyed｜まったく破壊された
drastically: 劇的に、徹底的に、思い切って｜drastically change｜劇的に変わる
necessarily: 必ずしも(～ない)、必然的に｜not necessarily true｜必ずしも本当ではない
thereby: そうすることで、それによって｜thereby causing a problem｜そうすることで問題を引き起こす
frankly: 率直に、ありのままに｜speak frankly｜率直に話す
namely: すなわち、具体的に言うと｜namely the president｜すなわち大統領
hence: だから、それゆえに、今から｜hence it is important｜だからそれは重要だ
via: ～経由で、～によって｜via Tokyo｜東京を経由して
owing: ～のために、～に起因する、支払われるべき｜owing to the rain｜雨のために
clarify: ～を明らかにする、～を明確にする、～を浄化する｜clarify the point｜要点を明らかにする
smash: ～を粉々に砕く、～を強打する、粉砕、大ヒット｜smash a window｜窓を粉々に砕く
mourn: ～を悲しむ、～を嘆く、喪に服す｜mourn his death｜彼の死を悲しむ
summon: ～を呼ぶ、～を召喚する、（勇気など）を奮い起こす｜summon a doctor｜医者を呼ぶ
shatter: ～を粉々にする、粉々になる、（希望など）を打ち砕く｜shatter the glass｜ガラスを粉々にする
linger: 残る、長居する、（病気などが）長引く｜the smell lingers｜においが残る
lament: ～を嘆く、～を悲しむ、嘆き、悲歌｜lament the death｜死を嘆く
endowed: （be endowed withで）恵まれる、授けられる、（endow: ～に寄付する）｜endowed with talent｜才能に恵まれる
rejoice: 喜ぶ、～を喜ばせる｜rejoice at the news｜その知らせを喜ぶ
allocate: ～を配分する、～を割り当てる｜allocate resources｜資源を配分する
slap: ～をピシャリと打つ、平手打ち｜slap his face｜彼の顔をピシャリと打つ
contend: ～と主張する、争う、対処する｜contend that it is true｜それは本当だと主張する
swear: 誓う、～を断言する、ののしる｜swear an oath｜誓いを立てる（誓う）
discern: ～を識別する、～を見分ける、～を認識する｜discern the difference｜違いを識別する
degrade: ～を悪化させる、～の品位を下げる、～を降格する｜degrade the environment｜環境を悪化させる
erect: ～を築く、～を建てる、直立した｜erect a monument｜記念碑を築く
testify: 証言する、～を証明する｜testify in court｜法廷で証言する
spur: ～を駆りたてる、～に拍車をかける、拍車、刺激｜spur him to action｜彼を行動へと駆りたてる
roam: 歩き回る、放浪する、～を歩き回る｜roam the streets｜通りを歩き回る
frown: まゆをひそめる、しかめっ面｜frown at him｜彼にまゆをひそめる
lure: ～を呼び込む、～を誘惑する、魅力、おとり｜lure customers｜客を呼び込む
defy: ～に逆らう、～を拒む、（説明など）を拒絶する｜defy the rules｜規則に逆らう
stroll: ぶらつく、散歩する、散歩｜stroll in the park｜公園をぶらつく
rattle: ～をがたがた鳴らす、がたがた鳴る、～を動揺させる｜rattle the door｜ドアをがたがた鳴らす
reconcile: ～を調和させる、～を和解させる｜reconcile differences｜違いを調和させる
blur: ～をぼやかす、ぼやける、かすみ｜blur the image｜画像をぼやかす
soothe: ～をなだめる、（痛みなど）を和らげる｜soothe a baby｜赤ん坊をなだめる
impair: ～を低下させる、～を損なう｜impair health｜健康を低下させる
comply: （規則などに）従う、応じる｜comply with the law｜法律に従う
pierce: ～に穴をあける、～を貫く、（痛みなどが）身にしみる｜pierce the skin｜皮膚に穴をあける
stumble: つまずく、偶然出会う、失敗する｜stumble on a rock｜岩につまずく
hinder: ～をさまたげる、～を遅らせる｜hinder progress｜進歩をさまたげる
mock: ～をあざける、～をからかう、模擬の、偽の｜mock his idea｜彼の考えをあざける
embody: ～を具現する、～を体現する、～を含む｜embody the spirit｜精神を具現する
stalk: ～に忍び寄る、～につきまとう、（植物の）茎｜stalk a prey｜獲物に忍び寄る
proclaim: ～を宣言する、～を公布する｜proclaim independence｜独立を宣言する
applaud: ～に拍手する、～を称賛する｜applaud the performance｜演技に拍手する
inflict: （苦痛・損害など）を与える、～を負わせる｜inflict pain｜苦痛を与える
merge: 合併する、～を統合する、溶け込む｜merge two companies｜2つの会社を合併する
evacuated: 避難した、明け渡された（evacuate: ～を避難させる）｜evacuated residents｜避難した住民
undone: 元に戻る、ほどけた、未完成の（undo: ～を元通りにする）｜come undone｜元に戻る
poke: ～を突く、～をつつ出だす、突くこと｜poke him with a finger｜指で彼を突く
haunted: （幽霊などに）つきまとわれる、呪われた、悩まされた｜haunted by memories｜記憶につきまとわれる
adhere: 固く守る、固守する、付着する｜adhere to the plan｜計画を固く守る
compile: ～をまとめる、～を編集する｜compile data｜データをまとめる
wither: しぼむ、枯れる、衰える｜flowers wither｜花がしぼむ
stun: ～をびっくりさせる、～を気絶させる｜stun the audience｜観客をびっくりさせる
choke: のどがつまる、～を窒息させる、～をむせさせる｜choke on food｜食べ物でのどがつまる
deteriorate: 悪化する、低下する｜weather deteriorates｜天気が悪化する
dump: ～を捨てる、～を投棄する、ゴミ捨て場｜dump garbage｜ごみを捨てる
murmur: つぶやく、ささやく、つぶやき｜murmur softly｜静かにつぶやく
delete: ～を削除する、～を消去する｜delete a file｜ファイルを削除する
inhibit: ～を阻害する、～を抑制する｜inhibit growth｜成長を阻害する
divert: ～をそらす、～を迂回させる、～を楽しませる｜divert attention｜注意をそらす
tame: ～を飼いならす、飼いならされた、退屈な｜tame a wild animal｜野生動物を飼いならす
reap: ～を手に入れる、～を収穫する｜reap the rewards｜報酬を手に入れる
affirm: ～を断言する、～を肯定する｜affirm the decision｜決定を断言する
immersed: （be immersed inで）浸る、没頭している（immerse: ～を浸す）｜immersed in thought｜考えに浸る
expire: 期限が切れる、息を引き取る｜the contract expires｜契約の期限が切れる
embark: 乗り出す、着手する、乗船する｜embark on a journey｜旅に乗り出す
vow: 誓う、～を固く約束する、誓い｜vow to return｜戻ることを誓う
foresee: ～を予知する、～を見越す｜foresee the future｜未来を予知する
adore: ～を崇拝する、～を熱愛する、～が大好きである｜adore a hero｜英雄を崇拝する
yearn: 切望する、恋しく思う｜yearn for peace｜平和を切望する
undermine: ～を弱める、～の土台を崩す、～をひそかに傷つける｜undermine authority｜権威を弱める
suck: ～を吸う、～をしゃぶる、最悪だ｜suck blood｜血を吸う
pledge: 誓う、～を担保にする、誓約、担保｜pledge loyalty｜忠誠を誓う
intrude: 立ち入る、侵入する、～を押し付ける｜intrude into a room｜部屋に立ち入る
sue: ～を訴える、告訴する｜sue a company｜会社を訴える
distort: ～を歪曲する、～をゆがめる｜distort the truth｜真実を歪曲する
extinguish: ～を消す、～を消滅させる｜extinguish a fire｜火を消す
preach: ～を説教する、～を説く｜preach the gospel｜福音を説教する
curb: ～を抑制する、抑制、縁石｜curb inflation｜インフレを抑制する
withstand: ～に耐える、～に抵抗する｜withstand the pressure｜圧力に耐える
dip: ～を浸す、～を下げる、浸すこと、低下｜dip a finger in water｜指を水に浸す
recite: ～を暗唱する、～を朗読する｜recite a poem｜詩を暗唱する
thrust: ～を押し込む、～を突き刺す、推力、突撃｜thrust a knife｜ナイフを押し込む
plead: 嘆願する、弁護する、～を口実にする｜plead for mercy｜慈悲を嘆願する
humiliate: ～に恥をかかせる、～に屈辱を与える｜humiliate him in public｜人前で彼に恥をかかせる
discharge: ～を放出する、～を解雇する、～を退院させる、放出｜discharge wastewater｜廃水を放出する
condemn: ～を非難する、～に有罪判決を下す｜condemn terrorism｜テロリズムを非難する
retrieve: ～を検索する、～を取り戻す、～を回収する｜retrieve data｜データを検索する
shrug: （肩）をすくめる｜shrug one's shoulders｜肩をすくめる
evoke: ～を呼び起こす、～を喚起する｜evoke memories｜記憶を呼び起こす
fetch: ～を取ってくる、～を連れてくる、（ある値段で）売れる｜fetch a coat｜コートを取ってくる
flatter: ～にお世辞を言う、～を喜ばせる、～を実物以上によく見せる｜flatter the boss｜上司にお世辞を言う
prose: 散文、退屈な話｜write in prose｜散文で書く
textile: 織物、布地、織物の｜the textile industry｜織物産業
timber: 材木、樹木、（人物の）器量｜cut timber｜材木を切る
masterpiece: 傑作、名作｜a great masterpiece｜偉大な傑作
riot: 暴動、騒動、暴動を起こす｜cause a riot｜暴動を起こす
carriage: 車両、馬車、運搬、姿勢｜a horse carriage｜馬の車両（馬車）
apparatus: 装置、器具、器官、組織｜experimental apparatus｜実験の装置
fuss: 大騒ぎ、空騒ぎ、大騒ぎする｜make a fuss｜大騒ぎをする
deficiency: 欠乏、不足、欠陥｜a vitamin deficiency｜ビタミンの欠乏
heir: 相続人、後継者｜the heir to the throne｜王位の相続人
equator: 赤道｜near the equator｜赤道の近く
petroleum: 石油｜refine petroleum｜石油を精製する
witch: 魔女、魔法使い｜an evil witch｜邪悪な魔女
vapor: 蒸気、気体｜water vapor｜水の蒸気（水蒸気）
probe: 探査機、徹底的な調査、～を厳密に調べる｜a space probe｜宇宙探査機
expertise: 専門知識、専門的技術｜medical expertise｜医学の専門知識
scorn: 軽蔑、あざけり、～を軽蔑する｜feel scorn for...｜...に軽蔑を感じる
prophet: 預言者、提唱者｜a false prophet｜偽の預言者
breeze: そよ風、容易なこと｜a gentle breeze｜穏やかなそよ風
sin: （宗教・道徳上の）罪、罪を犯す｜commit a sin｜罪を犯す
surge: 急増、急激な高まり、大波、急増する｜a surge in prices｜価格の急増
complement: 補うもの、補完物、補語、～を補完する｜a complement to...｜...を補うもの
queue: 列、待ち行列、列を作る｜stand in a queue｜列に並ぶ
stake: 賭け金、利害関係、杭｜at stake｜賭け金として（危機に瀕して）
ambassador: 大使、使節｜an ambassador to Japan｜日本への大使
jury: 陪審（員団）、審査員｜a trial by jury｜陪審員による裁判
cluster: 集団、群れ、房、群がる｜a cluster of stars｜星の集団
lump: こぶ、塊、～をひとまとめにする｜a lump of sugar｜角砂糖（砂糖のこぶ・塊）
meadow: 牧草地、草地｜a green meadow｜緑の牧草地
feat: 偉業、功績、離れ業｜a great feat｜偉大な偉業
temperament: 気質、気性｜a nervous temperament｜神経質な気質
chill: 寒気、冷たさ、～を冷やす｜catch a chill｜寒気を感じる（風邪をひく）
appliance: 器具、家電製品｜a home appliance｜家庭用の器具（家電）
predecessor: 前任者、前のもの｜my predecessor｜私の前任者
entity: 存在（物）、実体｜a single entity｜単一の存在
hospitality: もてなし、歓待｜warm hospitality｜温かいもてなし
narrative: 話、物語、物語の｜a personal narrative｜個人的な話
segment: 部分、区分、～を分割する｜a segment of the market｜市場の区分（部分）
catastrophe: 大災害、大惨事｜a global catastrophe｜世界的な大災害
monarch: 君主、皇帝｜an absolute monarch｜絶対君主（皇帝）
constraint: 制約、制限、強制｜time constraint｜時間の制約
amendment: 改正、修正、修正案｜a constitutional amendment｜憲法の改正（修正）
cosmos: 宇宙、秩序｜the vast cosmos｜広大な宇宙
aisle: 通路｜an aisle seat｜通路側の席
hierarchy: 階級制度、ヒエラルキー｜a social hierarchy｜社会の階級制度
toll: 通行料、犠牲者（数）、鐘の音｜a toll road｜通行料の必要な道路（有料道路）
transaction: 取引、処理｜a business transaction｜商取引
burglar: 強盗、泥棒｜catch a burglar｜強盗を捕まえる
tyranny: 圧政、専制政治、暴虐｜escape from tyranny｜圧政から逃れる
parasite: 寄生生物、居候｜a harmful parasite｜有害な寄生生物
intuition: 直感、直観力｜rely on intuition｜直感に頼る
communist: 共産主義の、共産主義者｜a communist country｜共産主義の国
legacy: 遺産、受け継いだもの｜leave a legacy｜遺産を残す
vein: 静脈、血管、鉱脈｜blood in the vein｜静脈の血
discourse: 論説、談話、講話｜political discourse｜政治的な論説
dairy: 乳製品、酪農場、酪農の｜dairy products｜乳製品（酪農）
artifact: 工芸品、人工物｜an ancient artifact｜古代の工芸品
outlet: はけ口、出口、直売店、コンセント｜an outlet for stress｜ストレスのはけ口
apprehension: 不安、懸念、逮捕｜feel apprehension｜不安を感じる
melancholy: 憂うつ、ふさぎ込み、憂うつな｜a melancholy mood｜憂うつな気分
novelty: 目新しさ、斬新さ、新奇な物｜lose its novelty｜目新しさが薄れる
specimen: 標本、見本、実例｜a rare specimen｜珍しい標本
hygiene: 衛生、衛生学｜personal hygiene｜個人の衛生
tactics: 戦術、作戦、方策｜military tactics｜軍事的な戦術
monopoly: 独占（権）、独占企業｜have a monopoly｜独占している
token: 印、しるし、代用硬貨｜as a token of my appreciation｜感謝の印として
aristocracy: 貴族階級、貴族政治｜the French aristocracy｜フランスの貴族階級
revenge: 復讐、報復、～に復讐する｜take revenge on him｜彼に復讐する
activist: 活動家、運動家｜an environmental activist｜環境活動家
rhetoric: 美辞麗句、修辞法、誇張｜political rhetoric｜政治的な美辞麗句
entrepreneur: 起業家、事業家｜a successful entrepreneur｜成功した起業家
census: 国勢調査、人口調査｜a national census｜国勢調査
verge: 瀬戸際、縁、境界｜on the verge of tears｜泣きだす瀬戸際（今にも泣きそうで）
advent: 出現、到来｜the advent of the Internet｜インターネットの出現（到来）
analogy: 類似点、類推、たとえ｜draw an analogy｜類似点を引き出す（例える）
irrigation: 灌漑（かんがい）、水を引くこと｜an irrigation system｜灌漑システム
coverage: 報道、取材、適用範囲｜news coverage｜ニュース報道
cuisine: 料理、料理法｜French cuisine｜フランス料理
menace: 脅威、厄介者、～を脅かす｜a menace to society｜社会への脅威
peril: 危険、危難｜in great peril｜大きな危険の中で
limb: 手足、肢、大枝｜an artificial limb｜人工の手足（義肢）
assault: 攻撃、暴行、～を攻撃する｜sexual assault｜性的な攻撃（暴行）
hatred: 憎しみ、嫌悪｜feel hatred for him｜彼に憎しみを感じる
autonomy: 自主性、自治（権）｜local autonomy｜地方の自主性（自治）
cram: 塾、詰め込み勉強、～を詰め込む｜a cram school｜学習塾
subsidy: 補助金、助成金｜a government subsidy｜政府の補助金
empathy: 共感、感情移入｜feel empathy for her｜彼女に共感する
slang: 俗語、スラング｜teenage slang｜10代の俗語
posture: 姿勢、心構え、態度｜have a good posture｜良い姿勢をしている
ideology: イデオロギー、思想傾向｜political ideology｜政治的イデオロギー
curse: 災いのもと、呪い、悪態、～を呪う｜put a curse on him｜彼に災い（呪い）をもたらす
tumor: 腫瘍｜a brain tumor｜脳腫瘍
intersection: 交差点、交差｜at the intersection｜交差点で
duration: 期間、持続時間｜for the duration of the war｜戦争の期間中
deforestation: 森林破壊、森林伐採｜prevent deforestation｜森林破壊を防ぐ
precaution: 用心、予防措置｜take precautions｜用心する
bunch: ひとたば、群れ、房｜a bunch of flowers｜ひとたばの花
shortcoming: 欠点、短所｜his major shortcoming｜彼の主な欠点
aspiration: 熱望、向上心｜an aspiration for peace｜平和への熱望
psychiatrist: 精神科医｜consult a psychiatrist｜精神科医に相談する
shipping: 発送、輸送、船積み｜free shipping｜無料の発送（送料無料）
senator: 上院議員｜a US senator｜アメリカの上院議員
statesman: 政治家｜a great statesman｜偉大な政治家
subordinate: 部下、下位の、従属する｜his subordinate｜彼の部下
vacuum: 空白、真空、掃除機｜a vacuum cleaner｜真空掃除機（空白）
quest: 探究、追求、探し求めること｜a quest for truth｜真実の探究
meditation: 瞑想、熟考｜practice meditation｜瞑想を実践する
subscriber: 加入者、定期購読者｜a magazine subscriber｜雑誌の加入者（定期購読者）
riddle: 謎、なぞなぞ、不可解な人｜solve a riddle｜謎を解く
rag: ぼろ、ぼろ切れ｜an old rag｜古いぼろ
rust: さび、さびる｜covered with rust｜さびに覆われて
sanitation: 衛生（設備）、公衆衛生｜poor sanitation｜ひどい衛生状態
midst: まっただ中、中央｜in the midst of the crowd｜群衆のまっただ中で
mischief: いたずら、悪さ、害｜do mischief｜いたずらをする
proficiency: 熟達、堪能、検定｜a test of English proficiency｜英語の検定（熟達度）テスト
recollection: 記憶、回想、思い出｜have a clear recollection｜はっきりした記憶がある
latitude: 緯度、自由、許容範囲｜at a high latitude｜高緯度で
friction: 摩擦、不和、軋轢（あつれき）｜cause friction｜摩擦を引き起こす
botanist: 植物学者｜a famous botanist｜有名な植物学者
heredity: 遺伝、世襲｜by heredity｜遺伝によって
contempt: 軽蔑、侮辱｜feel contempt for him｜彼に軽蔑を感じる
anatomy: 解剖学、構造、解剖｜human anatomy｜人体の構造（解剖学）
integrity: 誠実、高潔、完全性｜a man of integrity｜誠実な人
cargo: 貨物、積み荷｜carry cargo｜貨物を運ぶ
bribe: わいろ、～を買収する｜take a bribe｜わいろを受け取る
eruption: 噴火、勃発｜a volcanic eruption｜火山の噴火
funeral: 葬式、葬儀｜attend a funeral｜葬式に出席する
deficit: 赤字、不足（額）｜a budget deficit｜予算の赤字
bulk: 大部分、容積、大きさ｜the bulk of the work｜仕事の大部分
millionaire: 百万長者、大富豪｜become a millionaire｜百万長者になる
ash: 灰、遺灰｜cigarette ash｜タバコの灰
realm: 領域、分野、王国｜the realm of science｜科学の領域
plantation: 農園、大農場｜a coffee plantation｜コーヒー農園
plow: すき、除雪機、～をすきで耕す｜a snow plow｜雪かき用のすき（除雪車）
vending: 販売（vending machine：自動販売機）｜a vending machine｜自動販売機
orphan: 孤児、～を孤児にする｜an orphan boy｜孤児の少年
neuron: 神経細胞、ニューロン｜a motor neuron｜運動神経細胞
vegetation: 植生、植物、草木｜tropical vegetation｜熱帯の植生
warrior: 戦士、勇士｜a brave warrior｜勇敢な戦士
mutation: 突然変異、変化｜genetic mutation｜遺伝子の突然変異
sewage: 下水、汚水｜a sewage system｜下水設備
paradigm: 理論的枠組み、パラダイム、模範｜a new paradigm｜新しい理論的枠組
protocol: 議定書、外交儀礼、通信規約｜a strict protocol｜厳しい議定書
skyscraper: 超高層ビル、摩天楼｜a tall skyscraper｜高い高層ビル
accord: 一致、協定、～を与える、一致する｜in accord with...｜...と一致して
bureaucrat: 官僚、お役所仕事をする人｜a government bureaucrat｜政府の官僚
array: 多彩、ずらりと並んだもの、配列｜an array of colors｜多彩な色
clash: 衝突、対立、衝突する｜a clash of opinions｜意見の衝突
torture: 拷問、苦痛、～を拷問にかける｜endure torture｜拷問に耐える
reign: 統治、治世、君臨する｜during his reign｜彼の統治の間に
thesis: 論文、命題、主題｜write a thesis｜論文を書く
digit: 桁、数字、指｜a two-digit number｜2桁の数字
agenda: 課題、協議事項、議題｜on the agenda｜課題（議題）に上って
onset: 発症、始まり、着手｜the onset of the disease｜病気の発症
peasant: 小作農、農民｜a poor peasant｜貧しい小作農
ultraviolet: 紫外線の、紫外線｜ultraviolet rays｜紫外（線）
renowned: 有名な、高名な｜a renowned artist｜有名な芸術家
transparent: 透き通った、透明な、明白な｜transparent glass｜透き通ったガラス
dim: 薄暗い、ぼんやりした、～を薄暗くする｜a dim light｜薄暗い光
legitimate: 正当な、合法的な、理にかなった｜a legitimate reason｜正当な理由
adverse: 悪条件の、不利な、逆の｜an adverse effect｜悪影響
swift: すばやい、迅速な｜a swift current｜すばやい（速い）流れ
naive: 世間知らずの、純真な、単純な｜a naive question｜世間知らずの質問
dumb: ばかな、口のきけない｜a dumb animal｜ばかな（口のきけない）動物
gloomy: 暗い、憂うつな、悲観的な｜a gloomy day｜暗い（どんよりした）日
furious: 激怒した、猛烈な｜furious at him｜彼に激怒した
earnest: まじめな、真剣な、熱心な｜an earnest desire｜まじめな（真剣な）願望
terrific: すばらしい、猛烈な、恐ろしい｜a terrific idea｜すばらしいアイデア
vertical: 垂直な、縦の｜a vertical line｜垂直な線
wicked: 邪悪な、意地悪な、いたずらな｜a wicked witch｜邪悪な魔女
subjective: 主観的な｜a subjective opinion｜主観的な意見
enlightened: 進んだ考えの、啓蒙された｜an enlightened mind｜進んだ考えの心
authentic: 本物の、信頼できる｜an authentic painting｜本物の絵画
brutal: 残忍な、野蛮な、厳しい｜a brutal murder｜残忍な殺人
dizzy: めまいがする、目が回るような｜feel dizzy｜めまいがする
sheer: まったくの、純粋な、切り立った｜sheer luck｜まったくの幸運
naughty: いたずらな、わんぱくな、行儀の悪い｜a naughty boy｜いたずらな少年
damp: 湿った、じめじめした｜a damp towel｜湿ったタオル
static: 静的な、変化のない、静電気｜static electricity｜静的な電気（静電気）
doomed: 運命にある、破滅する運命の｜be doomed to fail｜失敗する運命にある
respiratory: 呼吸器の、呼吸の｜the respiratory system｜呼吸器に関するシステム
innumerable: 無数の、数え切れないほどの｜innumerable stars｜無数の星
clumsy: 不器用な、ぎこちない、気が利かない｜clumsy fingers｜不器用な指
aesthetic: 美的な、美学の｜aesthetic appeal｜美的魅力
obsessed: とりつかれている、頭がいっぱいの｜obsessed with the idea｜その考えにとりつかれている
detached: 切り離された、一戸建ての、客観的な｜a detached house｜切り離された家（一戸建て）
wrecked: 難破した、壊れた｜a wrecked ship｜難破した船
reckless: 無謀な、向こう見ずな｜reckless driving｜無謀な運転
arrogant: 傲慢な、尊大な｜an arrogant attitude｜傲慢な態度
preoccupied: 頭がいっぱいの、夢中になった｜preoccupied with work｜仕事で頭がいっぱいだ
gigantic: 巨大な、ばく大な｜a gigantic statue｜巨大な像
conspicuous: 顕著な、目立つ、人目を引く｜conspicuous changes｜顕著な変化
slender: すらりとした、わずかな｜a slender body｜すらりとした体
manifest: 明らかな、～を明らかにする、現れる｜a manifest error｜明らかな間違い
tidy: きちんとした、整頓された、～を片付ける｜a tidy room｜きちんとした部屋
skeptical: 懐疑的な、疑い深い｜be skeptical about...｜...に懐疑的な
notorious: 悪名高い、有名な｜a notorious criminal｜悪名高い犯罪者
anonymous: 匿名の、作者不明の｜an anonymous letter｜匿名の（差出人不明の）手紙
monotonous: 単調な、変化のない｜a monotonous voice｜単調な声
ample: 豊富な、十分すぎるほどの、広い｜ample evidence｜豊富に（十分な）証拠
trim: こぎれいな、～を刈り込む、～を整える｜trim hair｜こぎれいな髪（髪を整える）
savage: 野蛮な、残忍な、未開の人｜a savage attack｜野蛮な攻撃
coherent: 一貫した、筋の通った｜a coherent argument｜一貫した議論
eloquent: 雄弁な、説得力のある｜an eloquent speaker｜雄弁な話し手
foul: 不快な、汚い、反則、ファウル｜a foul smell｜不快なにおい
juvenile: 青少年の、少年の、子供っぽい｜juvenile delinquency｜青少年の非行
compulsory: 義務的な、強制的な、必修の｜compulsory education｜義務的な教育（義務教育）
prone: （～する）傾向がある、～しやすい｜prone to making mistakes｜間違いを犯しやすい
arbitrary: 勝手な、恣意的な、独断的な｜an arbitrary decision｜勝手な（恣意的な）決定
ingenious: 独創的な、利口な、巧妙な｜an ingenious device｜独創的な装置
divine: 神の、神聖なる｜divine intervention｜神聖なる介入
tender: やさしい、柔らかい、～を提出する｜tender meat｜やさしい（柔らかい）肉
outraged: 憤慨している、激怒した｜an outraged citizen｜憤慨している市民
intrinsic: 本来備わっている、本質的な｜intrinsic value｜本来の価値
paralyzed: 麻痺している、身動きが取れない｜paralyzed with fear｜恐怖で麻痺している
compatible: 適合する、互換性のある、気が合う｜compatible with each other｜お互いに適合する
patriotic: 愛国的な、愛国心の強い｜a patriotic song｜愛国的な歌
eminent: 名高い、著名な、卓越した｜an eminent scientist｜名高い科学者
potent: 強力な、効力のある、説得力のある｜a potent drug｜強力な薬
insane: 正気を失っている、狂気の、非常識な｜go insane｜正気を失っている（狂う）
staple: 主要な、主食、ホッチキスの針｜a staple food｜主要な食べ物（主食）
secondhand: 間接的な、中古の、また聞きの｜secondhand smoke｜間接（受動）喫煙
indigenous: 先住の、原産の、固有の｜indigenous people｜先住の人々
utmost: 最大限の、最高の、極度の｜with the utmost care｜最も（細心の）注意を払って
integral: 不可欠な、完全な、整数の｜an integral part｜不可欠な部分
intricate: 複雑な、入り組んだ｜an intricate design｜複雑なデザイン
demographic: 人口統計の｜demographic changes｜人口統計の変化
mighty: 強力な、偉大な、非常に｜a mighty king｜強力な王
intact: 無傷の、手つかずの、完全なままで｜remain intact｜無傷のままである
intent: 決意している、熱心な、意図｜intent on winning｜勝つ決意をしている
intriguing: 興味深い、魅力的な｜an intriguing question｜興味深い質問
merry: 陽気な、愉快な｜a merry Christmas｜陽気なクリスマス
perpetual: 永続する、絶え間ない｜perpetual peace｜永続する平和
spinal: 脊椎の、背骨の｜spinal cord｜脊椎のコード（脊髄）
susceptible: 影響を受けやすい、感染しやすい｜susceptible to cold｜風邪にかかりやすい
mandatory: 義務的な、強制的な｜a mandatory rule｜義務的な規則
upright: まっすぐな、直立した、正直な｜stand upright｜まっすぐに立つ
abruptly: 不意に、突然に｜stop abruptly｜不意に止まる
conversely: 逆に、反対に｜conversely, it is true｜逆に、それは真実だ
predominantly: 主に、圧倒的に｜predominantly male｜主に男性の
lest: ～しないように、～するといけないから｜lest he should fail｜彼が失敗しないように

[account] for: ～を説明する ｜ How do you account for the sudden drop in sales? ｜ 売上の急激な減少をどう説明しますか。
[allow] for: ～を考慮に入れる ｜ You should allow for delays when planning your journey. ｜ 旅行の計画を立てる時は、遅れを考慮に入れるべきだ。
[answer] for: ～の責任を負う ｜ You will have to answer for your misbehavior one day. ｜ 君はいつか自分の不正行為の責任を負わなければならなくなるだろう。
[apologize] for: ～を謝罪する ｜ He apologized for keeping us waiting so long. ｜ 彼は私たちをそんなに長く待たせたことを謝罪した。
[apply] for: ～に申し込む ｜ She decided to apply for the scholarship to study abroad. ｜ 彼女は留学するためにその奨学金に申し込むことを決めた。
[ask] for: ～を求める ｜ It is important to ask for help when you are in trouble. ｜ 困ったときに助けを求めることは重要です。
[atone] for: ～を償う ｜ He tried to atone for his past mistakes by working hard. ｜ 彼は懸命に働くことで過去の過ちを償おうとした。
[bargain] for: ～を予期する ｜ The test was much harder than I had bargained for. ｜ そのテストは私が予期していたよりもずっと難しかった。
[blame] A for B: Bの責任をAに帰する ｜ You cannot blame him for the failure of the project. ｜ プロジェクトの失敗を彼のせいにすることはできない。
[call] for: ～を必要とする ｜ This difficult situation calls for immediate action. ｜ この困難な状況は即座の行動を必要としている。
[care] for: ～を好む ｜ I don't really care for spicy food very much. ｜ 私は辛い食べ物があまり好きではない。
[cater] for: ～の要望に応じる ｜ The hotel caters for the needs of business travelers. ｜ そのホテルはビジネス旅行者のニーズに応えている。
[charge] A for B: Bの代金としてAを請求する ｜ They charge fifty dollars for the repair service. ｜ 彼らは修理サービスに50ドルを請求する。
[compensate] for: ～を埋め合わせる ｜ Nothing can compensate for the loss of human life. ｜ 人命の損失を埋め合わせることができるものは何もない。
[criticize] A for B: BのことでAを非難する ｜ The government was criticized for its slow response. ｜ 政府はその対応の遅さで非難された。
[exchange] A for B: AをBと交換する ｜ I would like to exchange this shirt for a larger one. ｜ このシャツをもっと大きいものと交換したいのですが。
[excuse] A for B: BのことでAを許す ｜ Please excuse me for arriving so late. ｜ 到着がこんなに遅れたことをお許しください。
[feel] for: ～に同情する ｜ I really feel for her after everything she has been through. ｜ 彼女があれほど大変な経験をした後だけに、本当に同情する。
[head] for: ～に向かって進む ｜ The ship is heading for the tropical island. ｜ その船は熱帯の島に向かって進んでいる。
[hope] for: ～を望む ｜ Everyone is hoping for a peaceful solution to the conflict. ｜ 誰もがその紛争の平和的な解決を望んでいる。
[long] for: ～を切望する ｜ The children were longing for the summer vacation to start. ｜ 子供たちは夏休みが始まるのを切望していた。
[make] for: ～の方向へ進む ｜ As soon as the rain started, they made for the shelter. ｜ 雨が降り出すとすぐに、彼らは避難所の方へ向かった。
[mistake] A for B: AをBと間違える ｜ I mistook him for his twin brother in the dark. ｜ 私は暗闇の中で彼を彼の双子の兄と間違えた。
[opt] for: ～を選ぶ ｜ Most students opted for the online class instead of the in-person one. ｜ ほとんどの学生は対面授業ではなくオンライン授業を選んだ。
[pay] for: ～の報いを受ける ｜ He will pay for his arrogance in the near future. ｜ 彼は近い将来、自分の傲慢さの報いを受けることになるだろう。
[praise] A for B: BのことでAを褒める ｜ The teacher praised the student for her creative essay. ｜ 先生はその生徒の独創的な作文を褒めた。
[provide] for: ～に備える ｜ It is wise to provide for your retirement while you are young. ｜ 若いうちに老後に備えておくのは賢明なことだ。
[punish] A for B: BのことでAを罰する ｜ The boy was punished for breaking the window. ｜ その少年は窓を割ったことで罰せられた。
[qualify] for: ～の資格を得る ｜ You must pass the exam to qualify for the position. ｜ その職の資格を得るには試験に合格しなければならない。
[run] for: ～に立候補する ｜ She is planning to run for mayor next year. ｜ 彼女は来年、市長に立候補することを計画している。
[scold] A for B: BのことでAを叱る ｜ The mother scolded her son for not doing his homework. ｜ 母親は宿題をしなかったことで息子を叱った。
[send] for: ～を呼びにやる ｜ If the fever doesn't go down, you should send for a doctor. ｜ 熱が下がらないなら、医者を呼びにやるべきだ。
[stand] for: ～を表す ｜ What does the acronym "AI" stand for? ｜ 頭字語の「AI」は何を表していますか。
[strive] for: ～を目指して努力する ｜ We must always strive for excellence in our work. ｜ 私たちは常に仕事において卓越することを目指して努力しなければならない。
[substitute] A for B: Bの代わりにAを用いる ｜ You can substitute honey for sugar in this recipe. ｜ このレシピでは砂糖の代わりにハチミツを用いることができる。
[take] A for B: AをBだと思っている ｜ Do you take me for a fool? ｜ 私を馬鹿だと思っているのですか。
[thank] A for B: BのことでAに感謝する ｜ Thank you for inviting me to your beautiful home. ｜ あなたの美しい家に私を招待してくれてありがとう。
[vouch] for: ～を保証する ｜ I can vouch for his honesty and integrity. ｜ 私は彼の正直さと誠実さを保証することができます。
[vote] for: ～に賛成投票する ｜ Millions of people voted for the new candidate. ｜ 何百万もの人々がその新人候補者に賛成投票した。
[wait] for: ～を待つ ｜ We have been waiting for the bus for over an hour. ｜ 私たちは1時間以上もバスを待っている。
[yearn] for: ～を切望する ｜ The citizens yearned for freedom under the strict regime. ｜ 市民たちは厳しい政権下で自由を切望していた。
[capacity] for: ～の能力 ｜ Humans have an amazing capacity for learning new languages. ｜ 人間は新しい言語を学ぶ驚くべき能力を持っている。
[demand] for: ～への需要 ｜ There is a growing demand for electric vehicles worldwide. ｜ 世界中で電気自動車への需要が高まっている。
[remedy] for: ～への解決策 ｜ Education is often seen as a remedy for poverty. ｜ 教育はしばしば貧困への解決策と見なされる。
[reputation] for: ～という評判 ｜ That restaurant has a reputation for excellent service. ｜ あのレストランは素晴らしいサービスという評判がある。
[respect] for: ～に対する尊敬 ｜ Children should show respect for their elders. ｜ 子供たちは年長者に対する尊敬を示すべきだ。
[room] for: ～の余地 ｜ There is still plenty of room for improvement in this report. ｜ この報告書にはまだ改善の余地がたくさんある。
[sympathy] for: ～への同情 ｜ I have deep sympathy for the victims of the earthquake. ｜ 私はその地震の被災者へ深い同情を寄せる。
[talent] for: ～の才能 ｜ She has a natural talent for playing the piano. ｜ 彼女はピアノを弾く天性の才能がある。
[taste] for: ～の好み ｜ He developed a taste for classical music in college. ｜ 彼は大学でクラシック音楽への好みを募らせた。

[adapt] to: ～に適応する ｜ It takes time to adapt to a new cultural environment. ｜ 新しい文化的な環境に適応するには時間がかかる。
[adhere] to: ～を遵守する、～に固執する ｜ All members must adhere to the strict regulations of the club. ｜ すべての会員はそのクラブの厳しい規則を遵守しなければならない。
[adjust] to: ～に慣れる、～に適合する ｜ She found it difficult to adjust to life in a big city. ｜ 彼女は大都市での生活に慣れるのが難しいと感じた。
[allude] to: ～に言及する、～をほめかす ｜ The professor alluded to the upcoming exam during his lecture. ｜ 教授は講義中に次の試験についてほめかした。
[amount] to: 結局～になる、～に等しい ｜ His refusal to cooperate amounts to a declaration of war. ｜ 彼の協力を拒む姿勢は、結局のところ宣戦布告も同然だ。
[appeal] to: ～に訴える、～の心に響く ｜ The charity group appealed to the public for donations. ｜ その慈善団体は一般の人々に寄付を訴えた。
[apply] to: ～に当てはまる ｜ This rule does not apply to international students. ｜ この規則は留学生には当てはまりません。
[ascribe] A to B: AをBのせいにする、AをBに帰する ｜ He ascribes his success to hard work and a bit of luck. ｜ 彼は自分の成功を猛勉強と少しの幸運のおかげだと思っている。
[attach] A to B: AをBに添付する、AをBに取り付ける ｜ Please attach a recent photograph to your application form. ｜ 申請書に最近の写真を添付してください。
[attend] to: ～を処理する、～に注意を払う ｜ I must attend to this urgent matter immediately. ｜ 私はこの緊急の件をすぐに処理しなければならない。
[attribute] A to B: AをBの成果（せい）とみなす ｜ The medical team attributes the outbreak to contaminated water. ｜ 医療チームはその集団発生を汚染された水のせいだと考えている。
[bring] A to B: AをB（の状態）に至らせる ｜ The peace talks finally brought an end to the long conflict. ｜ 和平交渉はついに長い紛争に終止符を打った。
[cling] to: ～に固執する、～にしがみつく ｜ He still clings to the hope that his lost dog will return. ｜ 彼は行方不明の愛犬が戻ってくるという希望にいまだにしがみついている。
[commit] oneself to: ～に専念する、～に深く関わる ｜ She committed herself to improving her English speaking skills. ｜ 彼女は英語のスピーキング力を向上させることに専念した。
[confine] A to B: AをBに制限する、AをBに閉じ込める ｜ Please confine your comments to the topic under discussion. ｜ 発言は現在議論されている議題に限定してください。
[conform] to: ～に従う、～に順応する ｜ New buildings must conform to strict safety standards. ｜ 新しい建物は厳しい安全基準に従わなければならない。
[consent] to: ～に同意する ｜ Her parents finally consented to her studying abroad alone. ｜ 彼女の両親は、ついに彼女が単身留学することに同意した。
[contribute] to: ～に貢献する、～の一因となる ｜ Smoking can contribute to the development of lung cancer. ｜ 喫煙は肺がんの発症の一因となり得る。
[convert] A to B: AをBに転換する、AをBに変える ｜ The old factory was converted to a modern art museum. ｜ その古い工場は現代美術館に転換された。
[dedicate] oneself to: ～に身を捧げる、～に専念する ｜ The scientist dedicated himself to finding a cure for the disease. ｜ その科学者はその病気の治療法を見つけることに身を捧げた。
[devote] oneself to: ～に専念する、～に身を捧げる ｜ After retirement, he devoted himself to volunteering in the community. ｜ 定年退職後、彼は地域でのボランティア活動に専念した。
[expose] A to B: AをBにさらす ｜ Do not expose this sensitive chemical to direct sunlight. ｜ この繊細な化学物質を直射日光にさらさないでください。
[introduce] A to B: AをBに導入する、AをBに紹介する ｜ The company plans to introduce new technology to the factory. ｜ その会社は工場に新しい技術を導入することを計画している。
[lead] to: ～を引き起こす、～につながる ｜ A lack of communication often leads to serious misunderstandings. ｜ コミュニケーションの不足は、しばしば深刻な誤解を引き起こす。
[leave] A to B: AをBに任せる ｜ You can leave the final decision to the project manager. ｜ 最終決定はプロジェクトマネージャーに任せておいてよい。
[liken] A to B: AをBに例える ｜ Life is often likened to a long journey with many ups and downs. ｜ 人生はしばしば、多くの浮き沈みがある長い旅に例えられる。
[look] to: ～に頼る、～に期待する ｜ The team looks to their captain for leadership during tough games. ｜ チームは苦しい試合の間、キャプテンのリーダーシップに頼っている。
[object] to: ～に反対する ｜ Many local residents objected to building a new highway nearby. ｜ 多くの地元住民が近くに新しい高速道路を建設することに反対した。
[occur] to: （考えなどが）～の心に浮かぶ ｜ It never occurred to me that she might be lying to us. ｜ 彼女が私たちに嘘をついているかもしれないとは、私の心に全く浮かばなかった。
[owe] A to B: AをBに負っている、AはBのおかげである ｜ I owe my deep understanding of physics to my high school teacher. ｜ 私は物理への深い理解を高校の先生のおかげだと思っている。
[prefer] A to B: BよりAを好む ｜ Personally, I prefer taking the train to driving a car long distances. ｜ 個人的には、長距離を車で運転するよりも電車に乗る方を好む。
[reconcile] oneself to: ～をあきらめて受け入れる ｜ He gradually reconciled himself to the fact that he failed the exam. ｜ 彼は試験に落ちたという事実を徐々に受け入れた。
[refer] to: ～と言及する、～を参照する ｜ Please refer to the graph on page five for more details. ｜ 詳細については5ページのグラフを参照してください。
[relate] to: ～に共感する、～に関連する ｜ Many teenagers can relate to the main character of this novel. ｜ 多くのティーンエイジャーがこの小説の主人公に共感できる。
[resort] to: （強硬手段など）に訴える、～に頼る ｜ We should solve the problem through dialogue without resorting to violence. ｜ 私たちは暴力に訴えることなく、対話を通じて問題を解決すべきだ。
[respond] to: ～に反応する、～に返答する ｜ The patient is responding well to the new medical treatment. ｜ その患者は新しい治療法によく反応している。
[restrict] A to B: AをBに制限する ｜ Admission to the art gallery is restricted to ticket holders. ｜ ギャラリーへの入場はチケット所持者に制限されている。
[see] to: ～を手配する、～を引き受ける ｜ Don't worry about the flight reservations; I'll see to them. ｜ 飛行機の予約のことは心配しないでください。私が手配しておきます。
[submit] to: ～に服従する、～に屈する ｜ The rebels refused to submit to the authority of the government. ｜ 反乱軍は政府の権力に服従することを拒んだ。
[subscribe] to: ～（意見など）に同意する、～を定期購読する ｜ I do not subscribe to the view that money always brings happiness. ｜ 私はお金が常に幸福をもたらすという見解には同意しない。
[succumb] to: ～に屈する、～に負ける ｜ The player had to succumb to the intense heat and left the match. ｜ その選手は猛暑に屈して試合を途中棄権せざるを得なかった。
[surrender] to: ～に降伏する、～に屈する ｜ The enemy troops finally surrendered to the allied forces. ｜ 敵軍はついに連合軍に降伏した。
[turn] to: ～に頼る、～に目を向ける ｜ When facing a crisis, he always turns to his parents for advice. ｜ 危機に直面したとき、彼はいつも両親のアドバイスに頼る。
[yield] to: ～に屈する、～に屈服する ｜ The government will not yield to the unreasonable demands of the terrorists. ｜ 政府はテロリストの不条理な要求に屈することはないだろう。
[access] to: ～を利用する権利、～へのアクセス ｜ Students have free access to the university library's online database. ｜ 学生は大学図書館のオンラインデータベースを自由に利用する権利がある。
[alternative] to: ～に代わるもの、～の代替手段 ｜ Solar energy is a promising alternative to fossil fuels. ｜ 太陽エネルギーは化石燃料に代わる有望な代替手段だ。
[approach] to: ～への取り組み方、～へのアプローチ ｜ We need a completely new approach to solving this economic crisis. ｜ 私たちはこの経済危機を解決するために、完全に新しい取り組み方を必要としている。
[contribution] to: ～への貢献 ｜ His significant contribution to science earned him a Nobel Prize. ｜ 彼の科学への多大な貢献が、彼にノーベル賞をもたらした。
[key] to: ～の秘訣、～への鍵 ｜ Continuous practice is the key to mastering a foreign language. ｜ 継続的な練習が外国語を習得するための秘訣です。
[reaction] to: ～への反応 ｜ The public reaction to the new tax policy was largely negative. ｜ 新しい税制政策に対する大衆の反応は、大部分が否定的なものだった。

[comply] with: ～に従う、～を遵守する ｜ All companies must comply with the new environmental regulations. ｜ すべての企業は新しい環境規制に従わなければならない。
[coincide] with: ～と同時に起こる、～と一致する ｜ The publication of the magazine will coincide with the music festival. ｜ その雑誌の出版は音楽フェスティバルと同時に起こる（重なる）予定だ。
[cope] with: ～にうまく対処する ｜ It is hard to cope with the heavy workload this semester. ｜ 今学期の過重な課題量にうまく対処するのは大変だ。
[dispense] with: ～なしで済ます ｜ Computers have enabled us to dispense with a lot of paperwork. ｜ コンピュータのおかげで、私たちは多くの事務処理なしで済ますことができるようになった。
[interfere] with: ～を妨害する、～に干渉する ｜ Constant noise from the street interferes with my concentration. ｜ 通りからの絶え間ない騒音が私の集中を妨害する。
[part] with: ～を手放す ｜ She was reluctant to part with her old childhood books. ｜ 彼女は子供の頃の古い本を手放すのを嫌がった。
[provide] A with B: AにBを供給する ｜ The organization provides refugees with food and clean water. ｜ その組織は難民に食料と清潔な水を供給している。
[supply] A with B: AにBを供給する ｜ Local farms supply the supermarket with fresh vegetables daily. ｜ 地元の農場がそのスーパーマーケットに新鮮な野菜を毎日供給している。
[equip] A with B: AにBを装備させる ｜ The new laboratory is equipped with state-of-the-art instruments. ｜ 新しい実験室には最先端の器具が装備されている。
[endow] A with B: AにB（才能など）を授ける ｜ She is endowed with a beautiful singing voice and musical talent. ｜ 彼女は美しい歌声と音楽の才能を授けられている。
[furnish] A with B: AにB（情報・家具など）を供給する ｜ The witness refused to furnish the police with any details. ｜ 目撃者は警察に詳細な情報を供給することを拒んだ。
[present] A with B: AにBを贈る、提示する ｜ The committee presented the winner with a gold medal. ｜ 委員会は勝者に金メダルを贈った。
[entrust] A with B: AにBを委託する、預ける ｜ The manager entrusted him with the most important project. ｜ マネージャーは彼に最も重要なプロジェクトを委託した。
[confront] A with B: AにB（困難・証拠など）を直面させる ｜ When confronted with the evidence, the suspect admitted his guilt. ｜ 証拠を直面させられたとき、容疑者は自分の罪を認めた。
[compare] A with B: AをBと比較する ｜ If you compare this year's profits with last year's, you see a big drop. ｜ 今年の利益を去年のものと比較すると、大きな下落が見られる。
[identify] A with B: AをBと同一視する ｜ Readers often identify the main character with the author themselves. ｜ 読者はしばしば、主人公を著者自身と同一視する。
[confuse] A with B: AをBと混同する ｜ It is easy to confuse the word 'affect' with 'effect'. ｜ 「affect」という単語を「effect」と混同しやすい。
[mix] A up with B: AをBと混同する ｜ I always mix him up with his identical twin brother. ｜ 私はいつも彼を彼の一卵性の双子の兄と混同してしまう。
[associate] A with B: AをBと結びつける、連想する ｜ Most people associate the color green with nature and peace. ｜ ほとんどの人は緑色を自然や平和と結びつける。
[combine] A with B: AをBと結合させる ｜ The chef combined traditional flavors with modern cooking techniques. ｜ そのシェフは伝統的な風味を現代の調理技術と結合させた。
[charge] A with B: AをB（罪など）で告発する ｜ The politician was charged with bribery and corruption. ｜ その政治家は贈収賄と汚職の罪で告発された。
[credit] A with B: AにB（功績など）があると信じる ｜ Historians credit the scientist with discovering the law of gravity. ｜ 歴史家たちはその科学者に重力の法則を発見した功績があると見なしている。
[imbue] A with B: AにB（思想・感情など）を吹き込む ｜ The teacher tried to imbue her students with a love for literature. ｜ 先生は生徒たちに文学への愛を吹き込もうとした。
[infuse] A with B: AにB（活力など）を注入する ｜ The new CEO's speech infused the employees with hope and enthusiasm. ｜ 新しいCEOのスピーチは、従業員に希望と熱意を注入した。
[clutter] A with B: AをBで散らかす ｜ Please don't clutter the living room with your old magazines. ｜ 古い雑誌で居間を散らかさないでください。
[cram] A with B: AにBを詰め込む ｜ He crammed his suitcase with clothes just before leaving for the airport. ｜ 彼は空港へ出発する直前に、スーツケースに服を詰め込んだ。
[deluge] A with B: AにB（質問・苦情など）を殺到させる ｜ The desk was deluged with complaints after the system crash. ｜ システムがクラッシュした後、受付に苦情が殺到した。
[plague] A with B: AをB（遅延・質問など）で苦しめる ｜ The project was plagued with unexpected delays and budget cuts. ｜ そのプロジェクトは予期せぬ遅延や予算削減に苦しめられた。
[saturate] A with B: AをBで満たす、浸す ｜ The market is currently saturated with cheap smartphone models. ｜ 市場は現在、安価なスマートフォンの機種で満たされている。
[sympathize] with: ～に同情する、～に共感する ｜ I deeply sympathize with your loss during this difficult time. ｜ この困難な時期におけるあなたの喪失に深く同情します。
[collide] with: ～と衝突する ｜ The bicycle collided with a parked car on the narrow street. ｜ 狭い通りで自転車が駐車中の車と衝突した。
[bear] with: ～（の言うこと）を我慢して聞く ｜ Please bear with me for a moment while I fix the projector. ｜ プロジェクターを直す間、少しの間私の話に付き合ってください（辛抱強く待ってください）。
[reckon] with: ～を考慮に入れる、～に対処する ｜ You have to reckon with the possibility of sudden weather changes. ｜ 突然の天候の変化の可能性を考慮に入れなければならない。
[trifle] with: ～をいい加減に扱う、～をもてあそぶ ｜ She is not a person whose feelings you can trifle with. ｜ 彼女は、その感情をいい加減に扱っていいような人ではない。
[tamper] with: ～を勝手にいじる、～を改ざんする ｜ It is a federal crime to tamper with official election ballots. ｜ 正式な投票用紙を勝手にいじる（改ざんする）ことは連邦犯罪である。
[tinker] with: ～をいじくり回す ｜ He loves to tinker with old car engines in his spare time. ｜ 彼は暇なときに古い車のエンジンをいじくり回すのが大好きだ。
[side] with: ～に味方する ｜ In the debate, the teacher decided to side with the minority opinion. ｜ 討論において、先生は少数派の意見に味方することを決めた。
[vie] with: ～と競う ｜ Several top universities are vying with each other for research grants. ｜ いくつかのトップ大学が研究助成金を求めて互いに競い合っている。
[remonstrate] with: ～に抗議する ｜ The players went to remonstrate with the referee about the decision. ｜ 選手たちはその判定について審判に抗議しに行った。
[compromise] with: ～と妥協する ｜ To maintain peace, we sometimes need to compromise with our opponents. ｜ 平和を維持するために、私たちは時に相手と妥協する必要がある。
[acquaint] A with B: AにBを知らせる、馴染ませる ｜ You must acquaint yourself with the house rules before moving in. ｜ 引っ越す前に、ハウスルールをよく知っておかなければならない。
[bother] with: ～をわざわざやる、～を気にする ｜ Don't bother with the dishes; I will wash them later. ｜ 皿洗いは気にしなくて（わざわざしなくて）いいよ。後で私が洗うから。
[consult] with: ～と協議する、～と相談する ｜ The doctor needs to consult with a specialist before the surgery. ｜ 医師は手術の前に専門医と協議する必要がある。
[correspond] with: ～と一致する、～と文通する ｜ The suspect's fingerprints do not correspond with those found at the scene. ｜ 容疑者の指紋は、現場で見つかったものと一致しない。
[disagree] with: ～（の体質・胃腸）に合わない ｜ Fast food always disagrees with my stomach, making me feel sick. ｜ ファストフードはいつも私の胃に合わず、気分が悪くなる。
[affiliate] with: ～と提携する ｜ The local clinic is affiliated with a major university hospital. ｜ その地元のクリニックは、主要な大学病院と提携している。
[familiarity] with: ～への精通、～についての知識 ｜ His familiarity with ancient history surprised the tour guide. ｜ 彼の古代史への精通ぶりは、ツアーガイドを驚かせた。
[acquaintance] with: ～の知識、～への理解 ｜ She has only a superficial acquaintance with the Japanese tea ceremony. ｜ 彼女は日本の茶道について、表面的な知識しか持っていない。
[obsession] with: ～への執着、～への強迫観念 ｜ His obsession with wealth eventually ruined his personal relationships. ｜ 彼の富への執着は、最終的に彼の人間関係を破滅させた。
[interaction] with: ～との相互作用、～との交流 ｜ Social interaction with peers is crucial for a child's development. ｜ 仲間との社会的交流は、子供の発達にとって極めて重要である。

[consist] in: ～にある ｜ Happiness consists in contentment with what you already have. ｜ 幸福は、自分がすでに持っているものに満足することにある。
[persist] in: ～を固執する、～を貫く ｜ He persisted in his opinion despite the strong opposition from his colleagues. ｜ 彼は同僚からの強い反対にもかかわらず、自分の意見を固執した（貫いた）。
[indulge] in: ～にふける、～に溺れる ｜ She occasionally indulges in expensive chocolates as a reward for her hard work. ｜ 彼女は懸命に働いたご褒美として、時々高価なチョコレートを食べることにふける。
[abound] in: ～に富んでいる ｜ The tropical river abounds in various species of rare fish and plants. ｜ その熱帯の川は、様々な種類の珍しい魚や植物に富んでいる。
[specialize] in: ～を専門にする ｜ The young lawyer decided to specialize in international trade law. ｜ その若い弁護士は、国際貿易法を専門にすることを決めた。
[deal] in: ～を商う、～を扱う ｜ This small shop in the corner deals in antique furniture and rare books. ｜ 角にあるこの小さな店は、アンティーク家具や珍しい本を商っている。
[trade] in: ～を商う、～を下取りに出す ｜ The merchant trades in exotic spices gathered from all over the world. ｜ その商人は、世界中から集められた珍しいスパイスを商っている。
[result] in: ～という結果になる ｜ The intense negotiation finally resulted in a mutually beneficial agreement. ｜ 激しい交渉は、ついに互いに利益のある合意という結果になった。
[succeed] in: ～に成功する ｜ They finally succeeded in finding a practical solution to the complex problem. ｜ 彼らはついに、その複雑な問題への実用的な解決策を見つけることに成功した。
[fail] in: ～に失敗する ｜ He failed in his ambitious attempt to break the world high jump record. ｜ 彼は走り高跳びの世界記録を破ろうとする、彼の大胆な試みに失敗した。
[participate] in: ～に参加する ｜ All students are strongly encouraged to participate in extracurricular activities. ｜ すべての学生は、課外活動に参加することが強く推奨されている。
[engage] in: ～に従事する、～を行う ｜ The organization is actively engaged in the development of renewable energy. ｜ その組織は、再生可能エネルギーの開発に積極的に従事している。
[absorb] in: ～に没頭する ｜ He was so absorbed in his research that he completely forgot about lunchtime. ｜ 彼は研究にすっかり没頭していたので、昼食の時間のことを完全に忘れていた。
[involve] in: ～に巻き込まれる、～に関与する ｜ She did not want to get involved in their heated personal argument. ｜ 彼女は、彼らの熱くなった個人的な口論に巻き込まれたくなかった。
[confide] in: ～に秘密を打ち明ける、～を信頼する ｜ She needed a trustworthy friend she could confide in during the crisis. ｜ 彼女は危機の最中に、秘密を打ち明けられる信頼できる友人を必要としていた。
[acquiesce] in: ～を黙認する、～に不承不承従う ｜ The board members reluctantly acquiesced in the controversial new policy. ｜ 取締役会のメンバーは、議論を呼んでいる新しい方針を不承不承黙認した。
[concur] in: ～（意見など）に同意する ｜ The judges concurred in the decision to grant the prisoner a pardon. ｜ 裁判官たちは、その囚人に恩赦を与えるという決定に同意した。
[culminate] in: ついに～に達する、最高潮に達して～になる ｜ Years of hard work culminated in her winning the prestigious science award. ｜ 長年の努力が、彼女の名誉ある科学賞の受賞という最高潮の結末に達した。
[originate] in: ～に由来する、～から起こる ｜ This traditional custom is thought to have originated in ancient Greece. ｜ この伝統的な習わしは、古代ギリシャに由来すると考えられている。
[believe] in: ～の存在（価値）を信じる ｜ Do you still believe in ghosts or some form of life after death? ｜ あなたは今でも幽霊や、何らかの形の死後の世界を信じますか。
[verse] in: ～に精通している ｜ The professor is deeply versed in the history of classical literature. ｜ 教授は、古典文学の歴史に深く精通している。
[root] in: ～に根ざしている ｜ The long-standing conflict is deeply rooted in historical misunderstandings. ｜ その長年の紛争は、歴史的な誤解に深く根ざしている。
[implicate] in: ～に関与している、～に巻き込まれている ｜ Several high-ranking officials were implicated in the political scandal. ｜ 数人の高官が、その政治的スキャンダルに関与していた。
[clothe] in: ～をまとっている ｜ Early in the morning, the mountains were clothed in a thick layer of fog. ｜ 早朝、山々は厚い霧の層をまとっていた。
[bury] in: ～に没頭している、～に埋もれている ｜ He sat quietly at his desk, buried in piles of official paperwork. ｜ 彼は山のような公式書類に埋もれて、静かに机に向かっていた。
[end] in: 結局～で終わる ｜ The intense soccer match ended in a dramatic draw after extra time. ｜ その激しいサッカーの試合は、延長戦の末に劇的な引き分けで終わった。
[interest] in: ～に興味を持たせる ｜ The new interactive display interested the children in natural science. ｜ その新しい体験型の展示は、子供たちに自然科学への興味を持たせた。
[disappoint] in: ～に失望する ｜ I was deeply disappointed in his unexpected lack of cooperation on the project. ｜ 私は、そのプロジェクトに対する彼の予期せぬ協力のなさに深く失望した。
[share] in: ～を分かち合う ｜ All team members will share in the profits generated by the new product. ｜ すべてのチームメンバーが、新製品によって生み出された利益を分かち合うことになる。
[glory] in: ～を誇る、～を大いに喜ぶ ｜ The underdog team gloried in their unexpected victory over the champions. ｜ 勝ち目の薄かったチームは、王者に対する予期せぬ勝利を大いに喜んだ。
[take] in: ～をだます ｜ Don't be taken in by his smooth talk and sophisticated manners. ｜ 彼の流暢な話し方や洗練された態度にだまされてはいけない。
[give] in: 屈する ｜ After hours of fierce negotiation, the company finally gave in to the union's demands. ｜ 何時間にも及ぶ激しい交渉の後、会社はついに組合の要求に屈した。
[hand] in: 提出する ｜ Please make sure to hand in your assignments by the end of this week. ｜ 今週末までに、必ず課題を提出するようにしてください。
[turn] in: 提出する ｜ You must turn in your official ID card before leaving the company for good. ｜ 完全に退職する前に、公式の身分証明書を提出しなければならない。
[bring] in: ～をもたらす、～を稼ぐ ｜ The new marketing strategy is expected to bring in more international customers. ｜ 新しいマーケティング戦略は、より多くの海外の顧客をもたらすと期待されている。
[set] in: （好ましくないことが）始まる ｜ Severe economic depression set in shortly after the stock market crashed. ｜ 株式市場が暴落した直後、深刻な景気後退が始まった。
[break] in: 口を挟む ｜ I'm sorry to break in, but there is an urgent phone call from the manager. ｜ お話の腰を折って（口を挟んで）申し訳ありませんが、マネージャーから緊急の電話が入っています。
[drop] in: ひょっこり立ち寄る ｜ Feel free to drop in on us whenever you are in the neighborhood. ｜ 近所に来たときはいつでも、私たちのところに気軽にひょっこり立ち寄ってください。
[fill] in: 必要事項を記入する ｜ Please fill in the application form carefully with your personal details. ｜ 申込書にあなたの個人情報を注意深く記入してください。
[cave] in: 陥没する、降伏する ｜ The roof of the old warehouse caved in under the heavy weight of snow. ｜ その古い倉庫の屋根は、雪の重みで陥没した。
[confidence] in: ～への信頼 ｜ The general public seems to have lost confidence in the current government's economic policies. ｜ 大衆は、現政府の経済政策への信頼を失っているようだ。
[faith] in: ～への信頼、信仰 ｜ You need to have faith in your own inner abilities to succeed in life. ｜ 人生で成功するためには、自分自身の内なる能力への信頼を持つ必要がある。
[difficulty] in: ～することの難しさ ｜ As a foreigner, he experienced great difficulty in finding a steady job. ｜ 外国人として、彼は安定した仕事を見つけることに大きな難しさを感じた。
[increase] in: ～の増加 ｜ There has been a significant increase in online sales during the holiday season. ｜ 休暇期間中に、オンラインの売上に著しい増加が見られる。
[decrease] in: ～の減少 ｜ A sudden decrease in temperature caused the water pipes to freeze overnight. ｜ 気温の急激な減少（低下）が、一晩のうちに水道管の凍結を引き起こした。
[decline] in: ～の減少、衰退 ｜ The sharp decline in the birthrate has become a serious social issue in many countries. ｜ 出生率の急激な減少は、多くの国で深刻な社会問題になっている。
[progress] in: ～における進歩 ｜ The international medical team made rapid progress in cancer research this year. ｜ その国際的な医療チームは、今年、がん研究において急速な進歩を遂げた。
[rise] in: ～の上昇 ｜ A sharp rise in oil prices has severely affected many industries worldwide. ｜ 石油価格の急激の上昇が、世界中の多くの産業に深刻な影響を与えている。
[belief] in: ～への確信、信仰 ｜ Her strong belief in social justice motivated her to become a human rights lawyer. ｜ 社会正義への彼女の強い確信が、彼女に人権弁護士になる動機を与えた。
[share] in: ～への関与、～の分け前 ｜ He successfully claimed a larger share in the profits of the family business. ｜ 彼は、家族経営のビジネスの利益に対して、より大きな分け前を要求することに成功した。

[depend] on: ～に依存する、～次第である ｜ Success depends on how much effort you put into it. ｜ 成功はあなたがどれだけ努力を注ぎ込むか次第である。
[rely] on: ～に頼る、～を信頼する ｜ You can always rely on her to keep a secret. ｜ 彼女が秘密を守ってくれるということはいつでも信頼してよい。
[count] on: ～を当てにする、～を頼りにする ｜ Don't count on his help because he is often unreliable. ｜ 彼はしばしば当てにならないので、彼の助けを当てにしてはいけない。
[insist] on: ～を強く主張する、～と言い張る ｜ The customer insisted on speaking to the store manager. ｜ その顧客は店の責任者と話すことを強く主張した。
[congratulate] A on B: BのことでAを祝う ｜ They congratulated him on passing the difficult entrance exam. ｜ 彼らは彼が難関の入試に合格したことを祝った。
[impose] A on B: A（税金・義務など）をBに課す、押し付ける ｜ The government decided to impose a new tax on luxury goods. ｜ 政府は贅沢品に新しい税金を課すことを決定した。
[inflict] A on B: A（損害・苦痛など）をBに与える、負わせる ｜ The heavy storm inflicted severe damage on the coastal town. ｜ 激しい嵐が沿岸の町に深刻な損害を与えた。
[concentrate] on: ～に集中する ｜ I need a quiet place where I can concentrate on my studies. ｜ 私は勉強に集中できる静かな場所を必要としている。
[focus] on: ～に焦点を合わせる、～に集中する ｜ The discussion will focus on the economic impact of the new law. ｜ 議論はその新しい法律の経済的影響に焦点を合わせる予定だ。
[reflect] on: ～を熟考する、～を振り返る ｜ He sat quietly for an hour, reflecting on his past mistakes. ｜ 彼は自分の過去の過ちを振り返りながら、1時間静かに座っていた。
[dwell] on: ～を長々と考える、～をくよくよ悩む ｜ There is no point in dwelling on your failures; move forward. ｜ 失敗をくよくよ悩むことに意味はない。前に進みなさい。
[blame] A on B: A（過失など）をBのせいにする ｜ She tried to blame the project's failure on her teammates. ｜ 彼女はプロジェクトの失敗をチームメイトのせいにしようとした。
[feed] on: ～を常食とする、～を餌にする ｜ Owls are birds of prey that feed mostly on mice and small insects. ｜ フクロウは主にネズミや小さな昆虫を常食とする猛禽類だ。
[live] on: ～を食べて生きる、～（収入など）で暮らす ｜ It is hard to live on such a small salary in a big city. ｜ 大都市でそのような少ない給料で暮らすのは大変だ。
[bestow] A on B: A（名誉・贈り物など）をBに授ける、贈る ｜ The university bestowed an honorary degree on the famous author. ｜ 大学はその有名な著者に名誉学位を授けた。
[confer] A on B: A（学位・称号など）をBに授与する ｜ The king conferred a knighthood on the brave soldier. ｜ 国王はその勇敢な兵士に騎士の称号を授与した。
[expend] A on B: A（時間・金・労力）をBに費やす ｜ They expended a lot of energy on organizing the charity event. ｜ 彼らは慈善イベントの企画に多大なエネルギーを費やした。
[lavish] A on B: A（賞賛・愛情など）をBに惜しみなく注ぐ ｜ The doting grandparents lavished attention and gifts on the child. ｜ その溺愛する祖父母は、その子供に注意と贈り物を惜しみなく注いだ。
[encroach] on: ～（権利・領土など）を侵害する、侵入する ｜ The expansion of the city is encroaching on the nearby forest. ｜ 都市の拡大が近くの森林を侵害している。
[intrude] on: ～（プライバシーなど）を侵害する、邪魔する ｜ I am sorry to intrude on your private family time. ｜ あなたのプライベートな家族の時間をお邪魔して申し訳ありません。
[embark] on: ～（新たな事業・旅など）に乗り出す、着手する ｜ The company is about to embark on an ambitious global strategy. ｜ その会社は野心的な世界的戦略に乗り出そうとしている。
[prevail] on: A（人）を説得して～させる ｜ We managed to prevail on him to give a speech at the wedding. ｜ 私たちはなんとか彼を説得して結婚式でスピーチをしてもらった。
[operate] on: ～の手術をする ｜ The surgeon will operate on the patient's right knee tomorrow morning. ｜ 外科医は明日の朝、患者の右膝の手術をする予定だ。
[border] on: ～に隣接する、ほとんど～に近い ｜ His extreme arrogance borders on pure madness. ｜ 彼の極端な傲慢さは、ほとんど純粋な狂気に近い。
[hinge] on: ～次第である、～にかかっている ｜ The success of the peace talks hinges on the compromise of both sides. ｜ 和平交渉の成功は、双方の妥協にかかっている。
[impinge] on: ～に影響を与える、～を侵害する ｜ The new regulations could impinge on the freedom of the press. ｜ 新しい規制は報道の自由を侵害する可能性がある。
[frown] on: ～に難色を示す、～を認めない ｜ Smoking in public places is heavily frowned on in this country. ｜ この国では、公共の場所での喫煙は激しく難色を示されている。
[comment] on: ～について意見を述べる、論評する ｜ The minister refused to comment on the ongoing investigation. ｜ 大臣は進行中の調査について意見を述べることを拒んだ。
[elaborate] on: ～について詳しく述べる ｜ Could you please elaborate on your proposal during the meeting? ｜ 会議中にあなたの提案について詳しく述べていただけますか。
[decide] on: ～に決める、～を選ぶ ｜ After much discussion, they finally decided on a suitable wedding venue. ｜ 多くの議論の末、彼らはついに適切な結婚式の会場に決めた。
[center] on: ～に集中する、～を中心に展開する ｜ The movie's plot centers on a mysterious diamond theft. ｜ その映画の筋書きは、不可解なダイヤモンド盗難事件を中心に展開する。
[pride] oneself on: ～を誇る、～を自慢にする ｜ The luxury hotel prides itself on its impeccable customer service. ｜ その高級ホテルは、申し分のない顧客サービスを誇りにしている。
[lean] on: ～に寄りかかる、～に頼る ｜ During difficult times, she always leans on her close friends for support. ｜ 困難な時期、彼女はいつも心の支えを求めて親しい友人に頼る。
[reckon] on: ～を当てにする、～を期待する ｜ We didn't reckon on the terrible traffic jams on our way to the airport. ｜ 私たちは空港へ向かう途中のひどい交通渋滞を予期していなかった。
[impact] on: ～への影響、効果 ｜ Microplastics have a devastating impact on marine ecosystems. ｜ マイクロプラスチックは海洋生態系に壊滅的な影響を与える。
[influence] on: ～への影響 ｜ Peer pressure can have a strong influence on a teenager's behavior. ｜ 同調圧力はティーンエイジャーの行動に強い影響を与え得る。
[effect] on: ～への影響、効果 ｜ Regular exercise has a highly positive effect on mental health. ｜ 定期的な運動はメンタルヘルスに非常に肯定的な効果を与える。
[emphasis] on: ～への強調、重視 ｜ The school places a strong emphasis on practical language learning. ｜ その学校は実践的な言語学習を強く重視している。
[ban] on: ～の禁止 ｜ The government announced a total ban on single-use plastic bags. ｜ 政府は使い捨てレジ袋の全面的な禁止を発表した。
[authority] on: ～の権威、専門家 ｜ Professor Smith is a leading authority on ancient Egyptian history. ｜ スミス教授は古代エジプト史の第一人者である。

[iron] out: ～（問題など）を解決する、調整する ｜ We need to iron out a few problems before signing the contract. ｜ 契約に署名する前に、いくつかの問題を解決する必要がある。
[rule] out: ～を排除する、除外する ｜ The police have not ruled out the possibility of arson. ｜ 警察は放火の可能性を排除していない。
[single] out: ～を選び出す ｜ It is unfair to single him out for criticism among all the employees. ｜ すべての従業員の中から彼だけを選び出して批判するのは不公平だ。
[blot] out: ～（記憶や文字など）を消し去る、覆い隠す ｜ Thick black smoke from the factory blotted out the sun. ｜ 工場からの立ち込める黒煙が太陽を覆い隠した。
[wipe] out: ～を全滅させる、消し去る ｜ Whole villages were wiped out by the devastating earthquake. ｜ 壊滅的な地震によって、村全体が全滅した。
[phase] out: ～を段階的に廃止する ｜ The government plans to phase out subsidies for fossil fuels. ｜ 政府は化石燃料への補助金を段階的に廃止することを計画している。
[map] out: ～（計画など）を詳細に立てる ｜ The committee has mapped out a new strategy for economic growth. ｜ 委員会は経済成長のための新しい戦略を詳細に立てた。
[flesh] out: ～を具体化する、肉付けする ｜ You need to flesh out your argument with more specific examples. ｜ もっと具体的な例を挙げて、君の主張を具体化する必要がある。
[sound] out: ～（人の意向など）を打診する、探る ｜ I will sound out the manager about my relocation request tomorrow. ｜ 明日、私の配置転換の希望についてマネージャーの意向を打診してみるつもりだ。
[bail] out: ～（企業など）を救済する ｜ The government used taxpayers' money to bail out the failing bank. ｜ 政府は破綻しかけている銀行を救済するために納税者の金を使った。
[back] out: （約束などから）手を引く、撤回する ｜ It is too late to back out of the agreement now. ｜ 今さら協定から手を引く（約束を破る）には遅すぎる。
[opt] out: 参加しないことにする、脱退する ｜ Employees can choose to opt out of the company's pension scheme. ｜ 従業員は会社の年金制度に参加しないことを選択できる。
[eke] out: ～（生計など）をなんとか立てる ｜ The old man managed to eke out a living by growing his own vegetables. ｜ その老人は自分で野菜を育てることで、なんとか生計を立てていた。
[peter] out: 次第に消滅する、弱まる ｜ The violent protests gradually petered out as night fell. ｜ 激しい抗議デモは、夜が更けるにつれて次第に収まっていった。
[dole] out: ～を（小出しに）配る、分け与える ｜ The charity began to dole out food and blankets to the flood victims. ｜ その慈善団体は洪水の被災者たちに食料や毛布を小出しに配り始めた。
[spell] out: ～を詳しく説明する ｜ The instructions spell out exactly how to assemble the furniture. ｜ 説明書には、その家具の組み立て方が正確に詳しく説明されている。
[fall] out: 口論する、仲違いする ｜ The two close friends fell out over a trivial monetary matter. ｜ その2人の親しい友人は、些細な金銭問題で口論した（仲違いした）。
[sort] out: ～を整理する、解決する ｜ We need to sort out our financial issues before buying a house. ｜ 家を買う前に、私たちは財政問題を解決する必要がある。
[wear] out: ～を疲れ果てさせる、すり減らす ｜ Walking around the huge museum all day completely wore me out. ｜ 巨大な博物館を一日中歩き回って、私はすっかり疲れ果てた。
[die] out: 絶滅する、廃れる ｜ Many ancient traditions and languages are in danger of dying out. ｜ 多くの古代の伝統や言語が廃れる危険に瀕している。
[leave] out: ～を省く、除外する ｜ You can leave out the second paragraph if you don't have enough time. ｜ 時間がない場合は、第2段落を省いてかまいません。
[make] out: ～を理解する、判別する ｜ I could not make out what he was whispering in the noisy room. ｜ 騒がしい部屋の中で、彼が何をささやいているのか理解（聞き取り）できなかった。
[figure] out: ～を理解する、解決する ｜ Scientists are trying to figure out how the virus spreads so fast. ｜ 科学者たちは、そのウイルスがなぜこれほど速く広まるのかを理解しようとしている。
[work] out: ～（問題など）を解決する、うまくいく ｜ Don't worry; I am sure things will work out fine in the end. ｜ 心配しないで。最終的には物事はすべてうまくいくと確信しているよ。
[turn] out: ～であることがわかる ｜ The stranger turned out to be a famous actor in disguise. ｜ その見知らぬ人は、変装した有名な俳優であることがわかった。
[bring] out: ～（性質など）を引き出す、出版する ｜ A good leader knows how to bring out the best in people. ｜ 優れたリーダーは、人々の最高の部分を引き出す方法を知っている。
[carry] out: ～（計画・実験など）を実行する ｜ The research team carried out a series of complex medical experiments. ｜ その研究チームは、一連の複雑な医学実験を実行した。
[point] out: ～を指摘する ｜ The accountant pointed out several critical errors in the financial report. ｜ 会計士は財務報告書の中のいくつかの重大な誤りを指摘した。
[stand] out: 目立つ、際立つ ｜ Her exceptional talent made her stand out from the other candidates. ｜ 彼女の並外れた才能は、他の候補者たちの中で彼女を際立たせた。
[break] out: （戦争・火事などが）勃発する ｜ World War II broke out in Europe in September 1939. ｜ 1939年9月、ヨーロッパで第二次世界大戦が勃発した。
[drop] out: 退学する、脱落する ｜ He had to drop out of university due to sudden financial difficulties. ｜ 彼は急な経済的な理由により、大学を退学せざるを得なかった。
[give] out: （力などが）尽きる、配る ｜ After running the marathon, his legs finally gave out. ｜ マラソンを走った後、彼の足はついに限界に達した（動かなくなった）。
[run] out: （在庫・時間が）尽きる、なくなる ｜ We are running out of time, so let's make a quick decision. ｜ 時間がなくなってきているので、素早く決定しましょう。
[hold] out: 持ちこたえる、長持ちする ｜ The small garrison managed to hold out against the enemy attacks for weeks. ｜ 小さな守備隊は、敵の攻撃に対して数週間なんとか持ちこたえた。
[pass] out: 気絶する、意識を失う ｜ She nearly passed out from the intense heat in the crowded train. ｜ 彼女は満員電車の激しい暑さで、危うく気絶するところだった。
[put] out: ～（火・照明など）を消す ｜ It took the firefighters three hours to put out the forest fire. ｜ 消防士たちが山火事を消すのに3時間かかった。
[blow] out: ～（火など）を吹き消す ｜ The little girl blew out all the candles on her birthday cake. ｜ その小さな女の子は、誕生日ケーキの上のキャンドルをすべて吹き消した。
[black] out: 意識を失う、停電になる ｜ The driver blacked out for a few seconds before the car crashed. ｜ 車が衝突する直前、運転手は数秒間意識を失った。
[clear] out: ～を片付ける、大掃除する ｜ I need to clear out the garage to make room for the new car. ｜ 新しい車を入れるスペースを作るために、ガレージを片付ける必要がある。
[speak] out: 思い切って意見を述べる、公に批判する ｜ More citizens are beginning to speak out against racial discrimination. ｜ 人種差別に対して、思い切って意見を述べる（声を上げる）市民が増えている。

[conjure] up: ～を呼び起こす ｜ The old photograph conjured up memories of his childhood. ｜ その古い写真は彼の子供時代の記憶を呼び起こした。
[crop] up: 不意に起こる ｜ New difficulties cropped up just before the project was completed. ｜ プロジェクトが完了する直前に、新たな問題が不意に起こった。
[draw] up: ～を作成する ｜ The lawyer will draw up the contract for the business merger. ｜ 弁護士が企業の合併に関する契約書を作成する予定だ。
[strike] up: ～を始める ｜ She managed to strike up a conversation with a famous director. ｜ 彼女は有名な映画監督となんとか会話を始めることができた。
[wind] up: 結局～という結果になる ｜ If you don't save money now, you will wind up broke. ｜ 今お金を貯めないと、結局一文無しになるだろう。
[size] up: ～を見極める ｜ It took the manager a few days to size up the new market situation. ｜ マネージャーが新しい市場の状況を見極めるのに数日かかった。
[step] up: ～を強化する ｜ The company needs to step up its efforts to reduce carbon emissions. ｜ その会社は二酸化炭素排出量を削減するための努力を強化する必要がある。
[soak] up: ～を吸収する ｜ Children soak up new languages much faster than adults do. ｜ 子供は大人よりもずっと速く新しい言語を吸収する。
[flare] up: 急に燃え上がる、再発する ｜ His knee injury flared up again during the intensive training. ｜ 集中トレーニングの最中に、彼の膝の怪我が再び再発した。
[play] up: ～を大げさに言う、強調する ｜ The media played up the scandal to attract more viewers. ｜ メディアはより多くの視聴者を引きつけるために、そのスキャンタルを大げさに報じた。
[do] up: ～を留める、修繕する ｜ She helped the little boy do up his heavy winter coat. ｜ 彼女はその小さな男の子が厚手の冬用コートのボタンを留めるのを手伝った。
[summon] up: ～を奮い起こす ｜ It took him a long time to summon up the courage to propose to her. ｜ 彼女にプロポーズする勇気を奮い起こすのに、彼は長い時間がかかった。
[rack] up: ～を蓄積する、手に入れる ｜ The talented athlete racked up several gold medals this season. ｜ その才能あるアスリートは今シーズン、いくつかの金メダルを獲得した。
[face] up to: ～に立ち向かう、～を勇敢に認める ｜ We must face up to the reality of the economic recession. ｜ 私たちは経済後退の現実を勇敢に認めなければならない。
[come] up with: ～を思いつく ｜ The research team came up with a brilliant solution to the problem. ｜ 研究チームはその問題に対する素晴らしい解決策を思いついた。
[put] up with: ～を我慢する、耐える ｜ I cannot put up with his constant complaints any longer. ｜ 私は彼の絶え間ない不平にこれ以上耐えることができない。
[keep] up with: ～に遅れずについていく ｜ It is vital for companies to keep up with the latest technological trends. ｜ 企業にとって最新の技術動向に遅れずについていくことは極めて重要だ。
[catch] up with: ～に追いつく ｜ She walked fast to catch up with her friends ahead. ｜ 彼女は前を行く友人に追いつくために速く歩いた。
[look] up to: ～を尊敬する ｜ Many young musicians look up to him as a role model. ｜ 多くの若いミュージシャンが彼をロールモデルとして尊敬している。
[live] up to: ～に応える ｜ The new smartphone failed to live up to the high expectations of consumers. ｜ その新しいスマートフォンは消費者の高い期待に応えることができなかった。
[stand] up for: ～を擁護する、支持する ｜ You must learn to stand up for your own rights. ｜ あなたは自分自身の権利を擁護することを学ばなければならない。
[make] up for: ～の埋め合わせをする ｜ He gave her flowers to make up for forgetting her birthday. ｜ 彼は彼女の誕生日を忘れた埋め合わせをするために花を贈った。
[bring] up: ～を持ち出す、～を育てる ｜ Please don't bring up that sensitive topic during the dinner party. ｜ ディナーパーティーの最中にその微妙な話題を持ち出さないでください。
[hold] up: ～を遅らせる ｜ The heavy snowfall held up the trains for several hours. ｜ 大雪のせいで電車が数時間遅れた。
[take] up: ～を始める、～を占める ｜ He decided to take up photography as a new hobby. ｜ 彼は新しい趣味として写真を始めることに決めた。
[turn] up: 現れる、見つかる ｜ He didn't turn up for the crucial meeting yesterday morning. ｜ 彼は昨日の朝の重要な会議に現れなかった。
[show] up: 現れる ｜ Only a few people showed up for the lecture due to the storm. ｜ 嵐のせいで、その講義に現れた人はわずか数人だった。
[end] up: 結局～になる ｜ If you keep driving so recklessly, you will end up having an accident. ｜ そんなに無謀な運転を続けていると、結局事故を起こすことになるぞ。
[clear] up: ～を解く、晴れる ｜ The professor managed to clear up the students' confusion about the formula. ｜ 教授は公式に関する学生たちの混乱をなんとか解くことができた。
[mix] up: ～を混同する ｜ It is easy to mix up the twins because they look so much alike. ｜ その双子はとてもよく似ているので、混同しやすい。
[back] up: ～を支持する、裏付ける ｜ You need solid scientific evidence to back up your hypothesis. ｜ あなたの仮説を裏付けるためには、確かな科学的証拠が必要だ。
[follow] up: ～を徹底的に調べる、追跡調査する ｜ The police are following up a new lead in the robbery case. ｜ 警察はその強盗事件における新しい手がかりを徹底的に調べている。
[screw] up: ～を台無しにする、失敗する ｜ I practiced for weeks because I didn't want to screw up the presentation. ｜ プレゼンテーションを台無しにしたくなかったので、私は何週間も練習した。
[mess] up: ～を台無しにする、散らかす ｜ His sudden cancellation completely messed up our weekend plans. ｜ 彼の突然のキャンセルは、私たちの週末の計画を完全に台無しにした。
[call] up: ～を呼び起こす、～を電話で呼び出す ｜ The scent of pine trees always calls up images of my hometown. ｜ 松の木の香りは、いつも私の故郷のイメージを呼び起こす。
[check] up on: ～を調べる、確認する ｜ The manager regularly checks up on the progress of each project. ｜ マネージャーは各プロジェクトの進捗状況を定期的に確認している。
[fix] up: ～を手配する、～を修理する ｜ We need to fix up a time for our next business meeting. ｜ 私たちは次のビジネス会議の日時を手配する必要がある。
[pick] up: ～を自然に身につける ｜ She picked up a lot of Spanish while living in Madrid for a year. ｜ 彼女はマドリードに1年間住んでいる間に、スペイン語をたくさん自然に身につけた。
[set] up: ～を設立する、組織する ｜ The university set up a special committee to investigate the matter. ｜ 大学はその問題を調査するために特別委員会を設立した。
[break] up: 解散する、別れる ｜ The police were called to break up the violent fight outside the club. ｜ クラブの外での激しい喧嘩を解散させるために警察が呼ばれた。

[bring] about: ～を引き起こす、もたらす ｜ The new economic policy brought about a major change in the market. ｜ 新しい経済政策は市場に大きな変化を引き起こした。
[come] about: （予期せぬことが）起こる、生じる ｜ Can you explain how this complicated situation came about? ｜ この複雑な状況がどのようにして生じたのか説明できますか。
[go] about: ～（仕事など）に取りかかる、～を進める ｜ How should I go about solving this difficult puzzle? ｜ この難しいパズルを解くのに、私はどのように取りかかるべきですか。
[set] about: ～（仕事など）に着手する、～を始める ｜ She immediately set about cleaning the messy room after the party. ｜ 彼女はパーティーの後、すぐに散らかった部屋の掃除に着手した。
[boast] about: ～を自慢する ｜ He is always boasting about his high grades in school to his friends. ｜ 彼はいつも学校での成績の良さを友人に自慢している。
[rave] about: ～をべた褒めする、絶賛する ｜ Movie critics are raving about the young director's new film. ｜ 映画評論家たちは、その若き監督の新作映画をべた褒めしている。
[gripe] about: ～について不満（文句）を言う ｜ Stop griping about the tight schedule and focus on your work. ｜ きついスケジュールについて不満を言うのをやめて、仕事に集中しなさい。
[speculate] about: ～について推測する、憶測する ｜ Journalists are speculating about the true reasons for his sudden resignation. ｜ ジャーナリストたちは彼の突然の辞任の真の理由について推測している。
[bother] oneself about: ～をくよくよ気にする ｜ You shouldn't bother yourself about such a trivial mistake. ｜ そんな些細な間違いをくよくよ気にするべきではない。
[concern] oneself about: ～を気にかける、心配する ｜ Parents naturally concern themselves about their children's future. ｜ 親が子供の将来を気にかけるのは当然のことだ。
[fuss] about: ～のことで大騒ぎする、やきもきする ｜ There is no need to fuss about minor details in the report. ｜ 報告書の細かい細部のことで大騒ぎする必要はない。
[hesitate] about: ～を躊躇する、ためらう ｜ She hesitated about accepting the job offer because of the long commute. ｜ 彼女は通勤時間が長いため、その仕事のオファーを受け入れるのを躊躇した。
[quarrel] about: ～のことで口論する、言い争う ｜ The siblings are always quarreling about who gets to use the computer first. ｜ そのきょうだいは、誰が最初にコンピュータを使うかについていつも口論している。
[remind] A about B: AにBのことを思い出させる（注意を促す） ｜ Please remind him about the doctor's appointment tomorrow. ｜ 明日の医者の予約について、彼に思い出させて（注意を促して）ください。
[consult] A about B: BについてAに相談する ｜ You should consult a financial expert about your investment plan. ｜ 投資計画について、財務の専門家に相談するべきだ。
[preach] about: ～について説教する、熱弁をふるう ｜ He is always preaching about the importance of environmental conservation. ｜ 彼はいつも環境保護の重要性について説教している。
[lie] about: ～について嘘をつく ｜ The applicant was rejected because he lied about his work experience. ｜ その応募者は職歴について嘘をついたために不採用となった。
[wonder] about: ～についてあれこれ考える、疑問に思う ｜ I often wonder about what my life will look like in ten years. ｜ 私は10年後の自分の人生がどのようになっているかについて、よくあれこれ考える。
[gossip] about: ～について噂話をする ｜ It is rude to gossip about other people's private matters. ｜ 他人のプライベートな事柄について噂話をするのは失礼だ。
[joke] about: ～について冗談を言う ｜ Climate change is a serious issue that we should not joke about. ｜ 気候変動は私たちが冗談を言うべきではない深刻な問題だ。
[misconception] about: ～に関する誤解 ｜ There is a common misconception about the effects of this medicine. ｜ この薬の効果については、一般的な誤解がある。
[skepticism] about: ～に対する懐疑的な見方 ｜ Public skepticism about the government's economic plan is growing. ｜ 政府の経済計画に対する大衆の懐疑的な見方が強まっている。
[anxiety] about: ～に関する不安 ｜ Many graduates feel high anxiety about finding a steady job. ｜ 多くの卒業生が、安定した仕事を見つけることに関して強い不安を感じている。
[inquiry] about: ～に関する問い合わせ ｜ The customer service center received many inquiries about the new policy. ｜ カスタマーサービスセンターは、新しい方針に関する多くの問い合わせを受けた。
[scruple] about: ～に関するためらい、罪悪感 ｜ The corrupt politician had no scruples about accepting bribes. ｜ その汚職政治家は、賄賂を受け取ることに何の罪悪感も持っていなかった。
[illusion] about: ～に関する幻想、勘違い ｜ You should have no illusions about the difficulty of this exam. ｜ この試験の難しさについて幻想を抱くべきではない。
[ignorance] about: ～に関する無知 ｜ His complete ignorance about local customs caused a serious misunderstanding. ｜ 地域の慣習に関する彼の完全な無知が、深刻な誤解を引き起こした。
[disagreement] about: ～に関する意見の不一致 ｜ There was a sharp disagreement about how to allocate the budget. ｜ 予算をどのように配分するかについて、激しい意見の不一致があった。
[uncertainty] about: ～に関する不確実さ、不透明感 ｜ Economic uncertainty about the future has reduced consumer spending. ｜ 将来に関する経済的な不確実さが、個人消費を減少させている。
[complaint] about: ～に関する苦情、不満 ｜ The hotel manager apologized for the guest's complaint about the room. ｜ ホテルの支配人は、客からの部屋に関する苦情に対して謝罪した。

[abstain] from: ～を控える、棄権する ｜ He chose to abstain from voting in the local election. ｜ 彼は地方選挙での投票を棄権することを選んだ。
[refrain] from: ～を控える ｜ Please refrain from using mobile phones while the concert is in progress. ｜ コンサート進行中は携帯電話のご利用をお控えください。
[stem] from: ～に起因する ｜ Most of her current anxiety stems from a lack of self-confidence. ｜ 彼女の現在の不安の大部分は、自信のなさに起因している。
[derive] from: ～に由来する ｜ Many English words are directly derived from Latin or ancient Greek. ｜ 多くの英単語は、ラテン語や古代ギリシャ語に直接由来している。
[spring] from: ～から生じる ｜ His deep interest in space springs from his childhood experiences. ｜ 彼の宇宙への深い興味は、子供時代の経験から生じている。
[result] from: ～から生じる ｜ The economic loss resulted from the unexpected cancellation of the project. ｜ その経済的損失は、プロジェクトの予期せぬ中止から生じた。
[deter] A from B: AにBすることを思いとどまらせる ｜ Heavy penalties are intended to deter people from committing crimes. ｜ 厳罰は、人々に犯罪を犯すことを思いとどまらせることを目的としている。
[hinder] A from B: AがBするのを妨げる ｜ A lack of funds could hinder the research team from completing the study. ｜ 資金不足は、研究チームが研究を完了するのを妨げる可能性がある。
[prohibit] A from B: AがBするのを禁止する ｜ The strict security policy prohibits employees from taking documents outside. ｜ 厳しいセキュリティ方針により、従業員が書類を外部に持ち出すことが禁止されている。
[prevent] A from B: AがBするのを妨げる ｜ Bad weather prevented the rescue helicopter from taking off. ｜ 悪天候のため、救助ヘリコプターは離陸できなかった。
[distinguish] A from B: AとBを区別する ｜ It is hard for artificial intelligence to distinguish fake news from real facts. ｜ 人工知能がフェイクニュースと本当の事実を区別するのは難しい。
[tell] A from B: AとBを見分ける ｜ The twins are so identical that even their mother cannot tell one from the other. ｜ その双子はそっくりなので、母親でさえ彼らを見分けることができない。
[know] A from B: AとBを区別する、識別する ｜ At that time, the young child did not know right from wrong. ｜ 当時、その幼い子供は善悪の区別がつかなかった。
[exempt] A from B: AをBから免除する ｜ The tax authorities decided to exempt low-income families from the new tax. ｜ 税務当局は、低所得世帯を新しい税金から免除することを決定した。
[exclude] A from B: AをBから除外する ｜ They chose to exclude her from the committee due to a conflict of interest. ｜ 利益相反のため、彼らは彼女を委員会から除外することを選んだ。
[distract] A from B: Aの気をBからそらす ｜ The constant noise outside distracted him from his intensive studies. ｜ 外の絶え間ない騒音が、彼の集中した勉強から気をそらした。
[divert] A from B: AをBからそらす、転換する ｜ The government tried to divert public attention from the political scandal. ｜ 政府は大衆の注意を政治的スキャンタルからそらそうとした。
[alienate] A from B: AをBから遠ざける、疎外する ｜ His arrogant behavior eventually alienated him from his closest friends. ｜ 彼の傲慢な行動は、最終的に彼を親しい友人たちから遠ざけた。
[dissociate] A from B: AをBから切り離す、分離して考える ｜ You cannot completely dissociate the author's work from their personal life. ｜ 著者の作品をその私生活から完全に切り離して考えることはできない。
[emerge] from: ～から現れる、脱する ｜ The country is finally beginning to emerge from the long economic recession. ｜ その国はついに、長い経済後退から脱しつつある。
[recoil] from: ～にしり込みする、身を引く ｜ Most people recoil from the idea of eating insects as a daily source of protein. ｜ ほとんどの人は、日常のタンパク質源として昆虫を食べるという考えにしり込みする。
[shrink] from: ～からしり込みする、逃れる ｜ A true leader must never shrink from making difficult moral decisions. ｜ 本物のリーダーは、道徳的に難しい決断を下すことから決してしり込みしてはならない。
[benefit] from: ～から利益を得る、恩恵を受ける ｜ Local businesses will greatly benefit from the expansion of the airport. ｜ 地元の企業は、空港の拡張から大きな利益を得るだろう。
[differ] from: ～と異なる ｜ The cultural norms of this region differ significantly from those of the capital. ｜ この地域の文化的な規範は、首都のそれとは著しく異なる。
[suffer] from: ～で苦しむ ｜ Many modern office workers suffer from chronic back pain and fatigue. ｜ 多くの現代のオフィスワーカーが、慢性的は腰痛や疲労で苦しんでいる。
[graduate] from: ～を卒業する ｜ After she graduates from university, she hopes to work for an international NGO. ｜ 大学を卒業した後、彼女は国際的なNGOで働くことを望んでいる。
[resign] from: ～を辞任する ｜ The prime minister was forced to resign from his post after the scandal. ｜ 首相はそのスキャンダルの後、職を辞任せざるを得なかった。
[departure] from: ～からの逸脱、出発 ｜ This bold new business model marks a major departure from tradition. ｜ この大胆な新しいビジネスモデルは、伝統からの大きな逸脱を示している。
[exemption] from: ～からの免除 ｜ Small businesses can apply for an exemption from certain administrative regulations. ｜ 小規模企業は、特定の行政規制からの免除を申請することができる。
[absence] from: ～の欠席、不在 ｜ His prolonged absence from school raised serious concerns among his teachers. ｜ 彼の長期にわたる学校の欠席は、教師たちの間に深刻な懸念を引き起こした。

[discriminate] against: ～を差別する ｜ We must not discriminate against people based on their nationality. ｜ 国籍に基づいて人々を差別してはならない。
[guard] against: ～を警戒する、防ぐ ｜ Regular exercise and a balanced diet help guard against various diseases. ｜ 定期的な運動とバランスの取れた食事は、様々な病気を防ぐのに役立つ。
[warn] A against B: AにB（行為など）をしないよう警告する ｜ The teacher warned the students against cheating on the final exam. ｜ 先生は生徒たちに期末試験で不正行為をしないよう警告した。
[rebel] against: ～に反抗する、反発する ｜ Many teenagers naturally rebel against their parents' strict authority. ｜ 多くのティーンエイジャーは、親の厳しい権威に自然と反抗する。
[provide] against: ～（不測の事態など）に備える ｜ It is wise to save money to provide against future economic hardships. ｜ 将来の経済的な困窮に備えてお金を貯めておくのは賢明だ。
[insure] against: ～に備えて保険をかける ｜ Homeowners should insure their property against fire and theft. ｜ 住宅所有者は火災や盗難に備えて資産に保険をかけるべきだ。
[struggle] against: ～と戦う、～に対抗して抗う ｜ The small business struggled against the fierce competition from large corporations. ｜ その小規模企業は大企業からの激しい競争に対抗して苦闘した。
[prejudice] against: ～に対する偏見 ｜ Education is crucial to eliminating deep-seated prejudice against minority groups. ｜ マイノリティグループに対する根深い偏見をなくすためには、教育が不可欠である。
[look] beyond: ～の先を見る、～以上のことを考慮する ｜ To succeed in business, you need to look beyond immediate profits. ｜ ビジネスで成功するためには、目の前の利益の先を見据える必要がある。
[extend] beyond: ～を越えて広がる、及ぶ ｜ The impact of the climate crisis extends far beyond national borders. ｜ 気候危機の及ぼす影響は、国境をはるかに越えて広がっている。
[live] beyond: （分不相応な）暮らしをする ｜ He ran into heavy debt because he kept living beyond his means. ｜ 彼は自分の資力に応じた以上の（分不相応な）暮らしを続けたため、多額の借金を抱えた。
[progress] beyond: ～を越えて進歩する ｜ The young pianist has already progressed beyond the basic level of instruction. ｜ その若いピアニストは、すでに基礎的な指導レベルを越えて進歩している。
[last] beyond: ～を越えて長持ちする ｜ These traditional values have managed to last beyond the modern era. ｜ これらの伝統的な価値観は、近代を越えてなんとか長持ちしてきた。
[peer] beyond: ～の先をじっと見る、透かし見る ｜ The scientist tried to peer beyond the current limitations of technology. ｜ その科学者は、現在の技術の限界の先をじっと見据えようとした。
[triumph] over: ～に打ち勝つ、～を克服する ｜ Through sheer determination, she managed to triumph over her physical disability. ｜ 純粋な決意によって、彼女は身体的な障害を克服することができた。
[prevail] over: ～に打ち勝つ、～に勝る ｜ In the end, truth and justice will always prevail over falsehood. ｜ 最終的には、真実と正義が常に虚偽に打ち勝つだろう。
[pore] over: ～を熟読する、精査する ｜ The lawyer spent hours poring over the details of the contract. ｜ 弁護士は契約書の詳細を精査するのに何時間も費やした。
[mull] over: ～を熟考する、よく考える ｜ I need some time to mull over the job offer before giving an answer. ｜ 返事をする前に、その仕事のオファーを熟考するための時間が必要だ。
[brood] over: ～（嫌なことなど）を思い悩む、くよくよ考える ｜ It does no good to brood over past mistakes that you cannot change. ｜ 変えることのできない過去の過ちを思い悩んでも何の役にも立たない。
[gloat] over: ～をほくそ笑む、満足げに眺める ｜ It is bad manners to gloat over your opponent's sudden defeat. ｜ 対戦相手の突然の敗北をほくそ笑むのはマナーが悪い。
[control] over: ～に対する支配（権）、管理 ｜ Parents cannot maintain complete control over their children's online activities. ｜ 親は子供のオンライン活動に対する完全な管理を維持することはできない。
[advantage] over: ～に対する優位、強み ｜ Fluent English skills gave him a significant advantage over other candidates. ｜ 流暢な英語力は、他の候補者に対する大きな優位を彼に与えた。
[go] through: ～（困難など）を経験する、～を詳細に調べる ｜ The country went through a severe economic crisis during the 1990s. ｜ その国は1990年代に深刻な経済危機を経験した。
[see] through: ～を見抜く、～を見通す ｜ She quickly saw through his polite manners and realized his true intentions. ｜ 彼女は彼の丁寧な態度をすぐに見抜き、彼の本心に気づいた。
[pull] through: ～（危機・病気など）を切り抜ける ｜ With excellent medical care, the patient successfully pulled through the critical illness. ｜ 素晴らしい医療ケアのおかげで、その患者は危機的な病気から無事に回復した。
[carry] through: ～をやり遂げる、実行する ｜ He is determined to carry through his plans despite the strong opposition. ｜ 彼は強い反対にもかかわらず、自分の計画をやり遂げる決意をしている。
[live] through: ～（戦争・困難など）を生き抜く、経験する ｜ My grandparents lived through the hardships of the Second World War. ｜ 私の祖父母は第二次世界大戦の苦難を生き抜いた。
[look] through: ～に目を通す、～を調べる ｜ Could you please look through this report before I submit it to the director? ｜ 私が取締役に提出する前に、この報告書に目を通していただけますか。
[break] through: ～を突破する ｜ The researchers finally broke through the major barrier in genetic engineering. ｜ 研究者たちはついに遺伝子工学における大きな障壁を突破した。
[follow] through: ～をやり通す、最後まで遂行する ｜ If you start a project, you must follow through until it is completed. ｜ プロジェクトを始めたなら、それが完了するまでやり通さなければならない。

abolish: 廃止する = do away with ｜ The government decided to abolish the tax. ｜ 政府はその税金を廃止することを決定した。
abstract: 抽象的な = conceptual ｜ The concept is too abstract to understand. ｜ その概念は抽象的すぎて理解できない。
absurd: 馬鹿げた = ridiculous ｜ It is absurd to believe such a rumor. ｜ そんな噂を信じるなんて馬鹿げている。
accumulate: 蓄積する = gather ｜ He managed to accumulate wealth over the years. ｜ 彼は長年にわたり富を蓄積することに成功した。
accurate: 正確な = precise ｜ Please give me an accurate description. ｜ 正確な描写をしてください。
acknowledge: 認める = admit ｜ She refused to acknowledge her mistake. ｜ 彼女は自分の間違いを認めるのを拒んだ。
adapt: 適応する = adjust ｜ You must adapt to the new environment. ｜ 新しい環境に適応しなければならない。
advocate: 主張する = support ｜ They advocate the protection of human rights. ｜ 彼らは人権の保護を主張している。
aggregate: 総計の = total ｜ The aggregate production reached a record high. ｜ 総生産量は過去最高に達した。
alienate: 遠ざける = estrange ｜ His behavior alienated his close friends. ｜ 彼の行動は親しい友人を遠ざけた。
alleviate: 軽減する = relieve ｜ The medicine will alleviate your pain. ｜ その薬はあなたの痛みを軽減するだろう。
allocate: 割り当てる = assign ｜ The budget was allocated to various projects. ｜ 予算は様々なプロジェクトに割り当てられた。
alter: 変える = change ｜ The plans were altered at the last minute. ｜ 計画は土壇場で変更された。
ambiguous: 曖昧な = vague ｜ His answer to the question was ambiguous. ｜ 質問に対する彼の回答は曖昧だった。
ample: 十分な = sufficient ｜ There is ample evidence to support the theory. ｜ その理論を支持する十分な証拠がある。
anonymous: 匿名の = unnamed ｜ An anonymous donor gave a large sum of money. ｜ 匿名の寄付者が多額の金を寄付した。
anticipate: 予期する = expect ｜ We anticipate that sales will rise next month. ｜ 私たちは来月売上が伸びると予期している。
authentic: 本物の = genuine ｜ This is an authentic painting by Picasso. ｜ これはピカソの真作の絵画だ。
arbitrary: 恣意的な = random ｜ The decision seemed completely arbitrary. ｜ その決定は完全に恣意的に思えた。
assert: 主張する = claim ｜ She continued to assert her innocence. ｜ 彼女は自分の無実を主張し続けた。
barren: 不毛の = infertile ｜ The soil in this region is barren. ｜ この地域の土壌は不毛である。
bizarre: 奇妙な = strange ｜ She wore a bizarre costume to the party. ｜ 彼女はパーティーに奇妙な衣装を着ていった。
bleak: 暗い = gloomy ｜ The economic outlook remains bleak. ｜ 経済の見通しは暗いままだ。
blend: 混ぜ合わせる = mix ｜ Blend all the ingredients together smoothly. ｜ すべての材料を滑らかに混ぜ合わせなさい。
boast: 自慢する = brag ｜ He likes to boast about his high salary. ｜ 彼は自分の高給について自慢するのが好きだ。
bold: 大胆な = brave ｜ Making that investment was a bold move. ｜ その投資を行うことは大胆な行動だった。
breakthrough: 画期的な進歩 = advance ｜ Scientists made a major breakthrough in cancer research. ｜ 科学者たちはがん研究において画期的な進歩を遂げた。
brittle: もろい = fragile ｜ The old bones had become brittle. ｜ その古い骨はもろくなっていた。
bewildered: 困惑した = confused ｜ The sudden change left him bewildered. ｜ 突然の変化に彼は困惑した。
benign: 良性の = harmless ｜ The tumor turned out to be benign. ｜ 腫瘍は良性であることが判明した。
brisk: 活発な = energetic ｜ We went for a brisk walk in the park. ｜ 私たちは公園へ活発なウォーキングに出かけた。
brilliant: 素晴らしい = excellent ｜ He proposed a brilliant solution to the problem. ｜ 彼はその問題に対して素晴らしい解決策を提案した。
bystander: 傍観者 = onlooker ｜ Several bystanders witnessed the accident. ｜ 数人の傍観者がその事故を目撃した。
blueprint: 設計図 = plan ｜ They drew up a blueprint for economic reform. ｜ 彼らは経済改革の設計図を策定した。
banish: 追放する = exile ｜ The king decided to banish the traitor. ｜ 国王はその反逆者を追放することを決定した。
candid: 率直な = frank ｜ Thank you for your candid opinion. ｜ 率直なご意見をありがとうございます。
catastrophe: 大災害 = disaster ｜ The earthquake was a major catastrophe for the city. ｜ その地震はその都市にとって大災害だった。
chronic: 慢性の = persistent ｜ He suffers from chronic back pain. ｜ 彼は慢性の腰痛に苦しんでいる。
clarify: 明確にする = clear up ｜ Could you clarify your last statement? ｜ 先ほどの最後の発言を明確にしていただけますか？
cognitive: 認知の = mental ｜ Reading helps improve cognitive development. ｜ 読書は認知の発達を高めるのに役立つ。
coherent: 一貫した = logical ｜ He failed to give a coherent explanation. ｜ 彼は一貫した説明をすることができなかった。
coincide: 同時に起こる = happen together ｜ My vacation coincides with the national holiday. ｜ 私の休暇は祝日と重なっている。
collapse: 崩壊する = fall down ｜ The old building is about to collapse. ｜ その古い建物は今にも崩壊しそうだ。
commence: 開始する = begin ｜ The graduation ceremony will commence at ten. ｜ 卒業式は10時に開始する。
compensate: 補償する = make up for ｜ The company will compensate you for the loss. ｜ 会社はその損失に対してあなたに補償する。
compel: 強制する = force ｜ Bad weather compelled us to change our plans. ｜ 悪天候により私たちは計画の変更を強制された。
competent: 有能な = capable ｜ She is a highly competent manager. ｜ 彼女は非常に有能な経営者だ。
comply: 従う = obey ｜ All students must comply with the rules. ｜ すべての生徒は規則に従わなければならない。
compulsory: 義務的な = mandatory ｜ Primary education is compulsory in this country. ｜ この国では初等教育は義務的である。
conceal: 隠す = hide ｜ He tried to conceal his true feelings. ｜ 彼は自分の本当の気持ちを隠そうとした。

debris: 残骸 = fragments ｜ The street was covered with debris after the explosion. ｜ 爆発の後、通りは残骸で覆われていた。
decay: 腐敗する = rot ｜ Sugar causes teeth to decay rapidly. ｜ 砂糖は歯を急速に腐敗させる。
deceive: 騙す = mislead ｜ It is wrong to deceive consumers with false ads. ｜ 虚偽の広告で消費者を騙すのは間違っている。
decline: 辞退する = refuse ｜ She politely decided to decline the invitation. ｜ 彼女はその招待を丁寧に辞退することにした。
defect: 欠陥 = flaw ｜ A serious defect was found in the software. ｜ そのソフトウェアに重大な欠陥が見つかった。
defy: 従わない = disobey ｜ The protesters chose to defy the government order. ｜ 抗議者たちは政府の命令に従わないことを選んだ。
deliberate: 意図的な = intentional ｜ His remarks were a deliberate attempt to hurt her. ｜ 彼の発言は彼女を傷つけようとする意図的な試みだった。
demolish: 取り壊す = destroy ｜ They plan to demolish the old stadium next month. ｜ 彼らは来月、古いスタジアムを取り壊す計画だ。
denounce: 非難する = condemn ｜ Leaders gathered to denounce the violent act. ｜ 指導者たちはその暴力的行為を非難するために集まった。
depict: 描写する = portray ｜ The novel depicts life in the 19th century. ｜ その小説は19世紀の生活を描写している。
deplete: 激減させる = exhaust ｜ Intense farming can deplete the soil of nutrients. ｜ 集約農業は土壌の栄養分を激減させることがある。
deprive: 奪う = rob ｜ The new law will deprive citizens of their rights. ｜ 新しい法律は市民から権利を奪うことになる。
despise: 軽蔑する = look down on ｜ I despise people who treat others poorly. ｜ 私は他人を不当に扱う人を軽蔑する。
detach: 切り離す = separate ｜ You can detach the coupon from the ticket. ｜ チケットからクーポンを切り離すことができます。
deteriorate: 悪化する = worsen ｜ The weather is expected to deteriorate tonight. ｜ 今夜は天候が悪化すると予想されている。
devastate: 壊滅させる = ruin ｜ The hurricane will devastate the coastal town. ｜ ハリケーンはその沿岸の町を壊滅させるだろう。
diminish: 減少させる = reduce ｜ The medicine helped to diminish the pain. ｜ その薬は痛みを減少させるのに役立った。
discard: 捨てる = throw away ｜ Please discard any outdated documents. ｜ 期限切れの書類はすべて捨ててください。
disclose: 暴露する = reveal ｜ The company refused to disclose its profits. ｜ 会社は利益を暴露することを拒んだ。
dispute: 論争 = argument ｜ The border dispute lasted for decades. ｜ その国境論争は数十年間続いた。
eccentric: 奇妙な = peculiar ｜ The eccentric inventor lived alone in the woods. ｜ その奇妙な発明家は森の中で一人で暮らしていた。
eligible: 資格のある = qualified ｜ Only citizens are eligible to vote. ｜ 市民だけが投票する資格がある。
eliminate: 排除する = remove ｜ The new system will eliminate human errors. ｜ 新しいシステムはヒューマンエラーを排除するだろう。
eloquent: 雄弁な = persuasive ｜ She made an eloquent speech at the conference. ｜ 彼女は会議で雄弁な演説をした。
elusive: 捉えどころのない = hard to catch ｜ The answer to the mystery remains elusive. ｜ その謎への答えは依然として捉えどころのないままだ。
embark: 着手する = start ｜ The company is ready to embark on a new project. ｜ 会社は新しいプロジェクトに着手する準備ができている。
embrace: 受け入れる = accept ｜ We must embrace new technologies to grow. ｜ 成長するためには新しい技術を受け入れなければならない。
emerge: 現れる = appear ｜ New details began to emerge after the investigation. ｜ 調査の後、新しい詳細が現れ始めた。
eminent: 著名な = distinguished ｜ He is an eminent scholar in the field of history. ｜ 彼は歴史学の分野における著名な学者だ。
emit: 放出する = release ｜ The engine began to emit thick black smoke. ｜ エンジンが濃い黒煙を放出し始めた。
emphasize: 強調する = stress ｜ The teacher wanted to emphasize the importance of reading. ｜ 先生は読書の重要性を強調したかった。
encounter: 遭遇する = meet ｜ Travelers may encounter unexpected problems. ｜ 旅行者は予期せぬ問題に遭遇することがある。
endeavor: 努力する = strive ｜ They will endeavor to finish the work on time. ｜ 彼らは時間通りに仕事を終えるよう努力するだろう。
endorse: 支持する = support ｜ The celebrity decided to endorse the new brand. ｜ その有名人は新しいブランドを支持することを決めた。
enhance: 高める = improve ｜ You can enhance your skills through practice. ｜ 練習を通じてスキルを高めることができる。
enormous: 巨大な = huge ｜ The project required an enormous amount of money. ｜ そのプロジェクトには巨大な額のお金が必要だった。
erase: 消去する = wipe out ｜ It is impossible to erase those bad memories. ｜ それらの悪い記憶を消去することは不可能だ。
erupt: 噴火する = explode ｜ The volcano is expected to erupt at any time. ｜ その火山はいつ噴火してもおかしくないと予想されている。
evaluate: 評価する = assess ｜ Experts will evaluate the safety of the bridge. ｜ 専門家がその橋の安全性を評価する。
exaggerate: 誇張する = overstate ｜ Don't exaggerate the difficulty of the task. ｜ そのタスクの難しさを誇張しないでください。
fabricate: 捏造する = invent ｜ He tried to fabricate an alibi for the night. ｜ 彼はその夜のアリバイを捏造しようとした。
facilitate: 促進する = promote ｜ The new highway will facilitate trade between cities. ｜ 新しい高速道路は都市間の貿易を促進するだろう。
faint: かすかな = dim ｜ I heard a faint sound from the basement. ｜ 地下室からかすかな音が聞こえた。
fatal: 致命的な = deadly ｜ The mistake proved to be a fatal one for the business. ｜ その間違いはビジネスにとって致命的なものとなった。
feasible: 実現可能な = practicable ｜ It is a feasible plan that can be completed soon. ｜ それはすぐに完了できる実現可能な計画だ。
fierce: 激しい = intense ｜ The two companies are in fierce competition. ｜ その2社は激しい競争を繰り広げている。
flourish: 繁栄する = thrive ｜ The culture began to flourish during this era. ｜ その文化はこの時代に繁栄し始めた。
forbid: 禁止する = prohibit ｜ The school rules forbid students from smoking. ｜ 校則は生徒の喫煙を禁止している。
fragile: もろい = breakable ｜ Please handle this fragile vase with care. ｜ このもろい花瓶は注意して扱ってください。
foster: 育む = nurture ｜ The program aims to foster international cooperation. ｜ そのプログラムは国際協力を育むことを目的としている。

garment: 衣服 = clothing ｜ She designed a beautiful wool garment. ｜ 彼女は美しいウールの衣服をデザインした。
genuine: 本物の = authentic ｜ The museum displays genuine artifacts. ｜ その博物館は本物の工芸品を展示している。
glance: ちらりと見ること = glimpse ｜ He cast a quick glance at his watch. ｜ 彼は時計をちらりと見た。
gloomy: 陰気な = dismal ｜ The rainy weather made me feel gloomy. ｜ 雨天のせいで私は陰気な気分になった。
gorgeous: 華やかな = splendid ｜ The actress wore a gorgeous dress to the event. ｜ その女優はイベントに華やかなドレスを着て出席した。
grant: 与える = bestow ｜ The committee decided to grant him a scholarship. ｜ 委員会は彼に奨学金を与えることを決定した。
grasp: 理解する = comprehend ｜ It was difficult to grasp the complex theory. ｜ その複雑な理論を理解するのは困難だった。
gratitude: 感謝 = thankfulness ｜ She expressed her deep gratitude to her teachers. ｜ 彼女は先生方に深い感謝の意を表した。
grave: 重大な = serious ｜ The situation has structural defects and poses a grave danger. ｜ 状況には構造的な欠陥があり、重大な危険をもたらしている。
graze: 草を食う = feed ｜ Cattle were allowed to graze freely in the field. ｜ 牛たちは野原で自由に草を食うことが許されていた。
grief: 深い悲しみ = sorrow ｜ Time will eventually heal your grief. ｜ 時間がやがてあなたの深い悲しみを癒やしてくれるだろう。
grim: 厳しい = stern ｜ The company faces a grim economic reality. ｜ その会社は厳しい経済の現実に直面している。
gross: 総計の = total ｜ The gross income exceeded their expectations. ｜ 総収入は彼らの予想を上回った。
grudge: 恨み = resentment ｜ He still holds a grudge against his former boss. ｜ 彼は元の上司に対してまだ恨みを抱いている。
guarantee: 保証する = assure ｜ We cannot guarantee that the product will work. ｜ 私たちはその製品が動くことを保証できない。
guardian: 保護者 = protector ｜ The legal guardian signed the consent form. ｜ 法定保護者が同意書に署名した。
hamper: 妨げる = hinder ｜ Heavy snow will hamper the rescue efforts. ｜ 大雪が救助活動を妨げるだろう。
haphazard: 計画性のない = random ｜ The books were piled in a haphazard way. ｜ 本が計画性のない方法で積み上げられていた。
hardship: 苦難 = suffering ｜ The refugees endured great hardship during the war. ｜ 難民たちは戦争中に大きな苦難に耐えた。
harsh: 厳しい = severe ｜ He received harsh criticism for his behavior. ｜ 彼は自分の行動に対して厳しい批判を受けた。
harvest: 収穫する = gather ｜ Farmers are preparing to harvest the wheat crops. ｜ 農夫たちは小麦の作物を収穫する準備をしている。
haunt: つきまとう = obsess ｜ Memories of the accident continue to haunt him. ｜ 事故の記憶が彼につきまとい続けている。
hazard: 危険 = danger ｜ Icy roads are a major hazard for drivers. ｜ 凍結した道路はドライバーにとって重大な危険だ。
hereditary: 遺伝的な = inherited ｜ The medical condition is purely hereditary. ｜ その病状は純粋に遺伝的なものだ。
hesitate: 躊躇する = waver ｜ Do not hesitate to ask if you have questions. ｜ 質問があれば躊躇せずに尋ねてください。
hideous: 醜悪な = ugly ｜ The new building was considered hideous by locals. ｜ 新しい建物は地元住民から醜悪だとみなされた。
hinder: 妨げる = obstruct ｜ High winds could hinder the flight schedule. ｜ 強風が飛行スケジュールを妨げる可能性がある。
hostile: 敵意のある = antagonistic ｜ The crowd grew hostile toward the speaker. ｜ 群衆は話し手に対して敵意を抱くようになった。
humble: 謙虚な = modest ｜ Despite his success, he remains a humble man. ｜ 成功したにもかかわらず、彼は謙虚な男のままだ。
humiliate: 恥をかかせる = embarrass ｜ The teacher did not mean to humiliate the student. ｜ 先生はその生徒に恥をかかせるつもりはなかった。
hypothesis: 仮説 = theory ｜ Scientists developed a hypothesis to explain the phenomenon. ｜ 科学者たちはその現象を説明するための仮説を立てた。
ignite: 点火する = kindle ｜ A spark from the fire could ignite the dry grass. ｜ 火からの火花が枯れ草に点火する可能性がある。
ignore: 無視する = neglect ｜ Drivers should not ignore traffic signs. ｜ ドライバーは交通標識を無視すべきではない。
illuminate: 照らす = light up ｜ Streetlights illuminate the dark alley at night. ｜ 街灯が夜の暗い路地を照らす。
illusion: 幻想 = delusion ｜ He was under the illusion that money brings happiness. ｜ 彼は金が幸福をもたらすという幻想を抱いていた。
imitate: 真似る = mimic ｜ Parrots can easily imitate human voices. ｜ オウムは人間の声を簡単に真似ることができる。
immense: 巨大な = vast ｜ The project requires an immense amount of time. ｜ そのプロジェクトには巨大な量の時間が必要だ。
imminent: 差し迫った = impending ｜ Experts warn of an imminent economic crisis. ｜ 専門家は差し迫った経済危機を警告している。
immortal: 不死の = eternal ｜ The artist's work achieved immortal fame. ｜ その芸術家の作品は不死の名声を獲得した。
immune: 免除された = exempt ｜ No one is immune from criticism. ｜ 批判を免除される人は誰もいない。
impair: 損なう = damage ｜ Lack of sleep can seriously impair your health. ｜ 睡眠不足は健康を深刻に損なう可能性がある。
impartial: 公平な = unbiased ｜ A judge must remain completely impartial. ｜ 裁判官は完全に公平でなければならない。
imperative: 不可欠な = essential ｜ It is imperative to act quickly in an emergency. ｜ 緊急時には迅速に行動することが不可欠だ。
implement: 実行する = execute ｜ The government will implement the new policy next year. ｜ 政府は来年、新しい政策を実行する。
implicit: 暗黙の = implied ｜ There was an implicit agreement between the two companies. ｜ その2社の間には暗黙の合意があった。
imply: ほのめかす = suggest ｜ Her silence seemed to imply agreement. ｜ 彼女の沈黙は同意をほのめかしているようだった。
impose: 課す = inflict ｜ The government plans to impose a new tax on luxury goods. ｜ 政府は高級品に新しい税を課すことを計画している。
impoverished: 貧困化した = poor ｜ The charity provides aid to impoverished regions. ｜ その慈善団体は貧困化した地域に援助を提供している。
impulse: 衝動 = urge ｜ He resisted the impulse to buy the expensive watch. ｜ 彼はその高価な時計を買いたいという衝動に抵抗した。
incentive: 動機 = motivation ｜ The company offered a bonus as an incentive to work harder. ｜ 会社はより一生懸命働く動機としてボーナスを提示した。

jeopardize: 危険にさらす = endanger ｜ His scandalous behavior could jeopardize the entire project. ｜ 彼のスキャンダラスな行動はプロジェクト全体を危険にさらす可能性がある。
judicial: 司法の = legal ｜ The supreme court holds the highest judicial authority in the country. ｜ 最高裁判所はその国で最高の司法権限を持っている。
judicious: 賢明な = wise ｜ We need to make a judicious decision regarding our future. ｜ 私たちは将来に関して賢明な決定を下す必要がある。
justify: 正当化する = defend ｜ He tried to justify his absence with a poor excuse. ｜ 彼は下手な言い訳で自分の欠席を正当化しようとした。
juvenile: 青少年の = youthful ｜ The government is concerned about the rise in juvenile delinquency. ｜ 政府は青少年非行の増加を懸念している。
kin: 親族 = relatives ｜ He left his entire fortune to his next of kin. ｜ 彼は全財産を最も近い親族に遺した。
kindle: 点火する = ignite ｜ The dry leaves were used to kindle the campfire. ｜ 枯れ葉はキャンプファイアに点火するために使われた。
knack: コツ = skill ｜ She has a remarkable knack for learning foreign languages. ｜ 彼女は外国語を習得する素晴らしいコツを掴んでいる。
lament: 嘆き悲しむ = mourn ｜ Many citizens lament the decline of the historic city. ｜ 多くの市民がその historic city の衰退を嘆き悲しんでいる。
latent: 隠れた = hidden ｜ The test is designed to discover the students' latent talents. ｜ そのテストは生徒たちの隠れた才能を発見するために設計されている。
lavish: 贅沢な = luxurious ｜ They spent a lavish amount of money on their wedding. ｜ 彼らは結婚式に贅沢な額のお金を費やした。
legacy: 遺産 = inheritance ｜ The ancient philosopher left a rich intellectual legacy to the world. ｜ その古代の哲学者は世界に豊かな知的遺産を遺した。
legible: 読みやすい = readable ｜ Please make sure that your signature is clear and legible. ｜ あなたの署名が鮮明で読みやすいことを確認してください。
legitimate: 合法的な = lawful ｜ The new government was recognized as the legitimate authority. ｜ 新政府は合法的な権力として認められた。
lethal: 致命的な = deadly ｜ The snake possesses a highly lethal venom that can kill a human. ｜ その蛇は人間を殺すことができる非常に致命的な毒を持っている。
liable: 責任がある = responsible ｜ You will be held liable for any damage caused to the rental car. ｜ レンタルカーに生じたあらゆる損害に対して、あなたは責任を問われる。
linger: 残る = remain ｜ The scent of her perfume continued to linger in the hallway. ｜ 彼女の香水の香りが廊下に残り続けた。
literacy: 読み書きの能力 = ability to read and write ｜ Financial literacy is essential for managing personal wealth. ｜ 個人の資産を管理するためには、お金の読み書きの能力（金融リテラシー）が不可欠だ。
literal: 文字通りの = exact ｜ It is often difficult to provide a literal translation of a poem. ｜ 詩の文字通りの翻訳を提供することはしばしば困難である。
loathe: 酷く嫌う = detest ｜ They loathe any form of cruelty toward animals. ｜ 彼らは動物に対するいかなる形式の残酷な行為も酷く嫌う。
lofty: 崇高な = noble ｜ The young politician expressed his lofty ideals for the country. ｜ その若い政治家は国に対する自分の崇高な理想を表明した。
longevity: 長寿 = long life ｜ Regular exercise and a balanced diet contribute to longevity. ｜ 定期的な運動とバランスの取れた食事が長寿に貢献する。
lucrative: 利益の上がる = profitable ｜ The entrepreneur turned his hobby into a lucrative business. ｜ その起業家は自分の趣味を利益の上がるビジネスに変えた。
lucid: 明快な = clear ｜ She gave a lucid explanation of the complex scientific theory. ｜ 彼女はその複雑な科学理論の明快な説明をした。
luminous: 光り輝く = bright ｜ The watch features luminous hands that glow in the dark. ｜ その時計は暗闇で光る光り輝く針を特徴としている。
lure: 誘惑する = entice ｜ The discount was a clever strategy to lure customers into the shop. ｜ その割引は顧客を店に誘惑するための賢い戦略だった。
lurk: 潜む = hide ｜ Unknown dangers may lurk in the deep forest. ｜ 深い森の中には未知の危険が潜んでいるかもしれない。
magnify: 拡大する = enlarge ｜ The microscope can magnify tiny objects up to a thousand times. ｜ 顕微鏡は小さな物体を最大1000倍まで拡大することができる。
magnitude: 重大さ = scale ｜ The government failed to realize the magnitude of the economic crisis. ｜ 政府は経済危機の重大さに気づくことができなかった。
maintain: 主張する = assert ｜ She continues to maintain her innocence despite the evidence against her. ｜ 自分に不利な証拠があるにもかかわらず、彼女は自分の無実を主張し続けている。
malicious: 悪意のある = spiteful ｜ A malicious rumor can easily destroy someone's hard-earned reputation. ｜ 悪意のある噂は、誰かが苦労して築いた名声を簡単に破壊することがある。
malignant: 悪性の = harmful ｜ The medical test confirmed that the tumor was malignant. ｜ 医学的検査により、その腫瘍が悪性であることが確認された。
mandate: 命令 = order ｜ The council received a clear mandate to reform the educational system. ｜ 評議会は教育制度を改革するという明確な命令（権限）を受けた。
mandatory: 義務的な = compulsory ｜ Attendance at the introductory session is mandatory for all new students. ｜ すべての新入生にとって、導入セッションへの出席は義務的である。
manifest: 明らかにする = show ｜ The underlying anxiety began to manifest itself in his behavior. ｜ 根底にある不安が彼の行動に明らかになり（現れ）始めた。
manipulate: 巧みに操る = control ｜ Some politicians try to manipulate public opinion through social media. ｜ 一部の政治家はソーシャルメディアを通じて世論を巧みに操ろうとする。
marginal: わずかな = slight ｜ The modification resulted in only a marginal improvement in efficiency. ｜ その修正は、効率のわずかな向上をもたらしただけだった。
massive: 巨大な = huge ｜ The earthquake caused massive destruction to the coastal infrastructure. ｜ その地震は沿岸のインフラに巨大な破壊をもたらした。
mature: 成熟した = adult ｜ She showed a mature attitude when dealing with the difficult customer. ｜ 彼女はその気難しい顧客に対応する際に、成熟した態度を示した。
mediocre: 平凡な = ordinary ｜ The movie received mediocre reviews from both critics and audiences. ｜ その映画は批評家と観客の両方から平凡な評価を受けた。
melancholy: 憂鬱な = gloomy ｜ The constant rain during the winter brought a melancholy mood. ｜ 冬の間の絶え間ない雨は、憂鬱な気分をもたらした。
menace: 脅威 = threat ｜ Industrial waste poses a serious menace to the local ecosystem. ｜ 産業廃棄物は地元の生態系に深刻な脅威をもたらしている。
merge: 合併する = combine ｜ The two international airlines decided to merge next year. ｜ その2つの国際航空会社は来年合併することを決定した。
minimize: 最小限にする = reduce ｜ Drivers should take all necessary precautions to minimize the risk of accidents. ｜ ドライバーは事故のリスクを最小限にするために、必要なすべての予防策を講じるべきだ。
miserable: 惨めな = wretched ｜ The homeless people were forced to live in miserable conditions. ｜ ホームレスの人々は惨めな状況での生活を余儀なくされていた。
modify: 修正する = alter ｜ The software developers had to modify the program to fix the bug. ｜ ソフトウェア開発者はバグを修正するためにプログラムを修正しなければならなかった。
monopoly: 独占 = exclusive control ｜ The state-owned enterprise holds a strict monopoly on the railway system. ｜ その国営企業は鉄道システムに対する厳格な独占権を握っている。
mourn: 悼む = lament ｜ The entire nation gathered to mourn the loss of their beloved leader. ｜ 全国民が、最愛の指導者の死を悼むために集まった。
multitude: 多数 = crowd ｜ A multitude of overlapping issues delayed the completion of the project. ｜ 多数の重複する問題がプロジェクトの完了を遅らせた。
mutual: 相互の = reciprocal ｜ Successful partnerships are always built on mutual trust and understanding. ｜ 成功するパートナーシップは、常に相互の信頼と理解の上に築かれる。

naive: 世間知らずの = innocent ｜ She was too naive to believe his words. ｜ 彼女は彼の言葉を信じるほど世間知らずだった。
native: 固有の = indigenous ｜ Kangaroos are native to Australia. ｜ カンガルーはオーストラリア固有の動物だ。
neglect: 軽視する = ignore ｜ He tended to neglect his health. ｜ 彼は健康を軽視する傾向があった。
neutral: 中立の = impartial ｜ Switzerland remained neutral during the war. ｜ スイスは戦争中、中立を保った。
nocturnal: 夜行性の = active at night ｜ Owls are famous nocturnal birds. ｜ フクロウは有名な夜行性の鳥だ。
nominal: 名目上の = in name only ｜ He is the nominal head of the company. ｜ 彼はその会社の名目上のトップだ。
notable: 注目すべき = remarkable ｜ There is a notable difference between the two plans. ｜ その2つの計画には注目すべき違いがある。
notify: 通知する = inform ｜ Please notify us of any changes. ｜ 変更があれば私たちに通知してください。
notion: 概念 = idea ｜ He has a vague notion of how the system works. ｜ 彼はそのシステムがどう機能するかについて漠然とした概念を持っている。
notorious: 悪名高い = infamous ｜ The area is notorious for its high crime rate. ｜ その地域は犯罪率の高さで悪名高い。
nourish: 養う = nurture ｜ Plants need good soil to nourish them. ｜ 植物を養うには良い土壌が必要だ。
novelty: 斬新さ = uniqueness ｜ The novelty of the product wore off quickly. ｜ その製品の斬新さはすぐに薄れてしまった。
nuisance: 厄介なもの = annoyance ｜ The loud noise from next door is a nuisance. ｜ 隣からの大きな騒音は厄介なものだ。
nurture: 育てる = foster ｜ Parents try to nurture their children's talents. ｜ 親は子供の才能を育てようとする。
negotiate: 交渉する = bargain ｜ They managed to negotiate a better deal. ｜ 彼らはなんとかより良い取引を交渉することに成功した。
objective: 客観的な = impartial ｜ A journalist must provide an objective report. ｜ ジャーナリストは客観的な報告を提供しなければならない。
oblige: 強いる = compel ｜ The law will oblige employers to provide insurance. ｜ 法律は雇い主に保険の提供を強いるだろう。
obliterate: 消し去る = wipe out ｜ The heavy rain will obliterate the footprints. ｜ 大雨が足跡を消し去るだろう。
oblivious: 気づいていない = unaware ｜ He was oblivious to the danger around him. ｜ 彼は周囲の危険に気づいていなかった。
obnoxious: 不快な = offensive ｜ His obnoxious behavior ruined the party. ｜ 彼の不快な行動がパーティーを台無しにした。
obscure: 曖昧な = vague ｜ The origin of the custom remains obscure. ｜ その慣習の起源は曖昧なままだ。
obsolete: 廃れた = outdated ｜ New technology makes old computers obsolete. ｜ 新しい技術は古いコンピュータを廃れたものにする。
obstacle: 障害 = barrier ｜ Lack of funding is the main obstacle to the project. ｜ 資金不足がそのプロジェクトの主な障害だ。
obstinate: 頑固な = stubborn ｜ She is too obstinate to change her mind. ｜ 彼女は頑固すぎて考えを変えられない。
obstruct: 妨害する = block ｜ Fallen trees obstruct the main road. ｜ 倒木が本道を妨害している。
obtain: 獲得する = acquire ｜ You need to obtain a visa to enter the country. ｜ その国に入国するにはビザを獲得する必要がある。
obvious: 明白な = evident ｜ It was obvious that she was unhappy. ｜ 彼女が不幸であることは明白だった。
omit: 省略する = leave out ｜ You can omit this section if it is not relevant. ｜ 関連がない場合は、このセクションを省略して構いません。
ongoing: 進行中の = continuous ｜ The police have an ongoing investigation into the case. ｜ 警察はその事件について進行中の調査を行っている。
orthodox: 正統派の = traditional ｜ He holds orthodox views on economic policy. ｜ 彼は経済政策に関して正統派の見解を持っている。
paradox: 逆説 = contradiction ｜ It is a paradox that more choices can make us less happy. ｜ 選択肢が増えるほど幸福感が減るというのは逆説だ。
paralyze: 麻痺させる = immobilize ｜ The heavy snowstorm will paralyze the city's traffic. ｜ 激しい吹雪が街の交通を麻痺させるだろう。
paramount: 最高の = supreme ｜ Safety is of paramount importance in this industry. ｜ この業界では安全性が最高の重要性を持つ。
patron: 支援者 = supporter ｜ The wealthy businessman was a patron of the arts. ｜ その裕福なビジネスマンは芸術の支援者だった。
peculiar: 独特の = specific ｜ This unique bird has a peculiar way of flying. ｜ このユニークな鳥には独特の飛び方がある。
penetrate: 貫く = pierce ｜ The sunlight managed to penetrate the thick clouds. ｜ 太陽光がなんとか厚い雲を貫いた。
perceive: 知覚する = notice ｜ I could perceive a subtle change in her voice. ｜ 彼女の声の微妙な変化を知覚することができた。
peril: 危険 = danger ｜ The ship was in great peril during the storm. ｜ その船は嵐の間、大きな危険にさらされていた。
perish: 死ぬ = die ｜ Thousands of animals perish in forest fires every year. ｜ 毎年、何千もの動物が森林火災で死ぬ。
permanent: 恒久的な = lasting ｜ The conflict caused permanent damage to the relationship. ｜ その紛争は関係に恒久的な損害を与えた。
permeate: 浸透する = spread through ｜ The smell of coffee began to permeate the room. ｜ コーヒーの香りが部屋に浸透し始めた。
perpetual: 絶え間ない = continuous ｜ The region suffers from a perpetual shortage of water. ｜ その地域は絶え間ない水不足に苦しんでいる。
perplex: 困惑させる = puzzle ｜ Her sudden disappearance continued to perplex the police. ｜ 彼女の突然の失踪は警察を困惑させ続けた。
persecute: 迫害する = oppress ｜ Minorities were persecuted under the old regime. ｜ 旧政権下で少数派は迫害された。
persevere: 忍耐強く努力する = persist ｜ You must persevere to achieve your goals. ｜ 目標を達成するためには忍耐強く努力しなければならない。
perspective: 視点 = viewpoint ｜ Traveling gives you a different perspective on life. ｜ 旅行は人生に対する異なる視点を与えてくれる。
pertinent: 適切な = relevant ｜ Please only ask questions pertinent to the topic. ｜ トピックに適切な質問だけをしてください。
pervasive: 普及している = widespread ｜ Smartphone use has become pervasive in modern society. ｜ スマートフォンの使用は現代社会において普及している。
pessimistic: 悲観的な = gloomy ｜ He has a pessimistic outlook on the future. ｜ 彼は将来に対して悲観的な見通しを持っている。
plausible: もっともらしい = believable ｜ Her story sounds plausible, but we need proof. ｜ 彼女の話はもっともらしく聞こえるが、証拠が必要だ。

qualify: 資格を得る = be eligible ｜ She worked hard to qualify for the final competition. ｜ 彼女は決勝大会の資格を得るために一生懸命働いた。
query: 質問 = question ｜ If you have any query about the bill, please call us. ｜ 請求書について質問があれば、お電話ください。
quest: 探求 = pursuit ｜ The scientists are in a quest for a new energy source. ｜ 科学者たちは新しいエネルギー源の探求を行っている。
quench: 癒やす = satisfy ｜ A cold glass of water will quench your thirst. ｜ 冷たいコップ1杯の水があなたの渇きを癒やすだろう。
radical: 根本的な = fundamental ｜ The company needs a radical change in its management style. ｜ その会社は経営スタイルに根本的な変化を必要としている。
reciprocal: 相互の = mutual ｜ The two countries signed an agreement based on reciprocal trust. ｜ 両国は相互の信頼に基づく協定に署名した。
reconcile: 和解させる = resolve ｜ It was difficult to reconcile the two opposing views. ｜ その2つの対立する見解を調和させるのは困難だった。
redundant: 余分な = unnecessary ｜ The editor removed redundant words from the article. ｜ 編集者は記事から余分な言葉を削除した。
refrain: 控える = abstain ｜ Please refrain from smoking in this area. ｜ この区域での喫煙はご遠慮ください。
refute: 論破する = disprove ｜ He produced clear evidence to refute the allegations. ｜ 彼はその申し立てを論破するために明確な証拠を提示した。
reinforce: 強化する = strengthen ｜ The bridge was reinforced with steel beams. ｜ その橋は鉄骨で強化された。
relentless: 容赦のない = persistent ｜ The army launched a relentless attack on the enemy. ｜ 軍は敵に対して容赦のない攻撃を開始した。
relevant: 関連のある = pertinent ｜ Please hand in all the documents relevant to the case. ｜ その事件に関連のあるすべての書類を提出してください。
reluctant: 気が進まない = unwilling ｜ She was reluctant to give away her secret recipe. ｜ 彼女は自分の秘密のレシピを明かすのに気が進まなかった。
remedy: 治療法 = cure ｜ Scientists are searching for an effective remedy for the disease. ｜ 科学者たちはその病気の効果的な治療法を探している。
remnant: 残り = remainder ｜ The archaeologists found the remnants of an ancient city. ｜ 考古学者たちは古代都市の残りを発見した。
renounce: 放棄する = give up ｜ The king decided to renounce his throne for love. ｜ 国王は愛のために王位を放棄することを決意した。
renowned: 有名な = famous ｜ The professor is renowned for his research on economics. ｜ その教授は経済学の研究で有名だ。
repel: 追い払う = drive away ｜ This spray is designed to repel mosquitoes. ｜ このスプレーは蚊を追い払うように設計されている。
replenish: 補充する = refill ｜ You need to replenish your fluids after a long run. ｜ 長距離走の後は水分を補充する必要がある。
sacred: 神聖な = holy ｜ The temple is considered a sacred place by the locals. ｜ その寺院は地元の人々から神聖な場所とみなされている。
sanction: 制裁 = penalty ｜ The United Nations imposed an economic sanction on the nation. ｜ 国連はその国に対して経済制裁を課した。
sarcastic: 皮肉な = ironic ｜ His sarcastic comments offended many people at the meeting. ｜ 彼の皮肉なコメントは会議で多くの人々を怒らせた。
scrutinize: 綿密に調べる = examine ｜ The auditor will scrutinize the financial records. ｜ 会計監査官は財務記録を綿密に調べる。
serene: 穏やかな = calm ｜ The lake looked beautiful and serene in the morning mist. ｜ その湖は朝霧の中で美しく穏やかに見えた。
shrink: 縮む = contract ｜ The wool sweater will shrink if you wash it in hot water. ｜ ウールのセーターは熱いお湯で洗うと縮む。
shun: 避ける = avoid ｜ He chose to shun the media after the scandal. ｜ 彼はスキャンダルの後、メディアを避けることを選んだ。
skeptical: 懐疑的な = doubtful ｜ Many experts remain skeptical about the new theory. ｜ 多くの専門家がその新しい理論に対して懐疑的なままだ。
slender: すらりとした = slim ｜ The dancer had a slender and graceful figure. ｜ そのダンサーはすらりとした優雅な体つきをしていた。
solitary: 孤独な = lonely ｜ He enjoys taking long and solitary walks in the forest. ｜ 彼は森の中で長時間の孤独な散歩を楽しんでいる。
soothe: 宥める = calm ｜ The mother tried to soothe her crying baby. ｜ 母親は泣いている赤ちゃんを宥めようとした。
sophisticated: 洗練された = advanced ｜ The military uses highly sophisticated tracking systems. ｜ 軍隊は高度に洗練された追跡システムを使用している。
spontaneous: 自発的な = voluntary ｜ The audience burst into a spontaneous applause. ｜ 観客から自発的な拍手が沸き起こった。
sporadic: 散発的な = occasional ｜ There were sporadic clashes between the two groups. ｜ その2つのグループの間で散発的な衝突があった。
stringent: 厳格な = strict ｜ The government enforced stringent regulations on emissions. ｜ 政府は排出量に対して厳格な規制を実施した。
tangible: 有形の = concrete ｜ The police have no tangible evidence against him. ｜ 警察は彼に対する有形の証拠を持っていない。
tedious: 退屈な = boring ｜ Copying data into spreadsheets can be a tedious task. ｜ スプレッドシートにデータをコピーするのは退屈な作業になり得る。
temper: 機嫌 = mood ｜ She lost her temper when things went wrong. ｜ 彼女は物事がうまくいかなくなったときに機嫌を損ねた。
tentative: 暫定的な = provisional ｜ We have made a tentative schedule for the next meeting. ｜ 私たちは次の会議の暫定的なスケジュールを作成した。
terminate: 終わらせる = end ｜ The company decided to terminate the contract. ｜ 会社はその契約を終わらせることを決定した。
thrive: 繁栄する = flourish ｜ The local businesses began to thrive under the new law. ｜ 地元のビジネスは新しい法律のもとで繁栄し始めた。
tolerance: 寛容 = endurance ｜ The school promotes a culture of tolerance and respect. ｜ 学校は寛容と尊重の文化を推進している。
toxic: 有毒な = poisonous ｜ The factory was fined for releasing toxic chemicals. ｜ その工場は有毒な化学物質を放出したことで罰金を科された。
tranquil: 静かな = peaceful ｜ We spent a tranquil weekend away from the busy city. ｜ 私たちは忙しい都市から離れて静かな週末を過ごした。
transform: 変形させる = change ｜ The magician managed to transform a flower into a bird. ｜ 魔術師はなんとか花を鳥に変形させることに成功した。
transient: 一時的な = temporary ｜ The heavy rain was transient and soon cleared up. ｜ 大雨は一時的なもので、すぐに晴れ渡った。
transparent: 透明な = clear ｜ Plastic containers are transparent so you can see inside. ｜ プラスチック容器は透明なので中身が見える。
treacherous: 不誠実な = disloyal ｜ His treacherous actions led to the downfall of the team. ｜ 彼の不誠実な行動がチームの没落を招いた。
trigger: 引き起こす = cause ｜ Stress can trigger various physical health problems. ｜ ストレスは様々な身体的健康問題を引き起こす可能性がある。
trivial: 些細な = insignificant ｜ Don't waste your precious time on such a trivial matter. ｜ そんな些細な事柄に貴重な時間を無駄にしないでください。

ultimate: 最終的な = final ｜ They reached the ultimate decision after long debate. ｜ 彼らは長い議論の末に最終的な決定に至った。
unanimous: 満場一致の = in complete agreement ｜ The committee reached a unanimous agreement on the matter. ｜ 委員会はその件に関して満場一致の合意に達した。
undergo: 経験する = experience ｜ The company is about to undergo a major restructuring. ｜ その会社は大規模な再構築を経験しようとしている。
undertake: 引き受ける = take on ｜ She was willing to undertake the difficult task. ｜ 彼女はその困難な仕事を進んで引き受けようとした。
unprecedented: 前例のない = unparalleled ｜ The economic growth of the country was unprecedented. ｜ その国の経済成長は前例のないものだった。
uphold: 支持する = support ｜ The supreme court decided to uphold the original verdict. ｜ 最高裁判所は元の評決を支持することを決定した。
urge: 強く促す = encourage ｜ Doctors urge people to exercise regularly. ｜ 医師は人々に定期的に運動することを強く促している。
utilize: 利用する = make use of ｜ We must utilize our limited resources effectively. ｜ 私たちは限られた資源を効果的に利用しなければならない。
utter: 全くの = complete ｜ The presentation was an utter failure. ｜ そのプレゼンテーションは全くの失敗だった。
vacant: 空いている = unoccupied ｜ There are no vacant rooms left in this hotel. ｜ このホテルには空いている部屋は残っていない。
vague: 曖昧な = obscure ｜ His explanation of the event was vague. ｜ 彼のその出来事に関する説明は曖昧だった。
vain: 無駄な = useless ｜ They made a vain attempt to fix the machine. ｜ 彼らはその機械を修理しようと無駄な試みをした。
valid: 有効な = legitimate ｜ You need a valid passport to travel abroad. ｜ 海外旅行をするには有効なパスポートが必要だ。
vanish: 消える = disappear ｜ The morning mist will soon vanish. ｜ 朝霧はやがて消えるだろう。
variable: 変わりやすい = changeable ｜ The weather in this region is highly variable. ｜ この地域の天候は非常に変わりやすい。
vast: 莫大な = immense ｜ The project requires a vast amount of money. ｜ そのプロジェクトには莫大なお金が必要だ。
verdict: 評決 = judgment ｜ The jury reached a verdict of not guilty. ｜ 陪審員団は無罪の評決に達した。
versatile: 多才な = adaptable ｜ This tool is versatile and can be used for many tasks. ｜ この道具は多才であり、多くの作業に使用できる。
vigor: 活力 = vitality ｜ He approached his new job with great vigor. ｜ 彼は素晴らしい活力を持って新しい仕事に取り組んだ。
virtual: 実質上の = practical ｜ The manager has virtual control over the project. ｜ 経営者がそのプロジェクトの実質上の支配権を握っている。
vital: 極めて重要な = essential ｜ Vitamin C is vital for maintaining good health. ｜ ビタミンCは良好な健康を維持するために極めて重要だ。
vulnerable: 脆弱な = susceptible ｜ Small companies are vulnerable to economic changes. ｜ 小規模な会社は経済の変化に対して脆弱である。
waive: 放棄する = give up ｜ The university decided to waive the tuition fee for him. ｜ 大学は彼に対する授業料を放棄することを決定した。
wane: 衰える = decline ｜ Public interest in the scandal began to wane. ｜ そのスキャンダルに対する世間の関心は衰え始めた。
wary: 慎重な = cautious ｜ Investors are wary of putting money into new tech stocks. ｜ 投資家は新しいハイテク株にお金を投じることに慎重になっている。
weary: 疲れ果てた = exhausted ｜ The long journey made the travelers weary. ｜ 長い旅が旅行者たちを疲れ果てさせた。
wholesome: 健康に良い = healthy ｜ The restaurant is known for serving wholesome meals. ｜ そのレストランは健康に良い食事を提供することで知られている。
withdraw: 撤回する = retract ｜ The politician had to withdraw his controversial statement. ｜ その政治家は論争を呼んだ発言を撤回しなければならなかった。
yearn: 切望する = long ｜ Many people yearn for a peaceful life in the countryside. ｜ 多くの人々が田舎での平和な生活を切望している。
zeal: 熱意 = enthusiasm ｜ She pursued her career in science with great zeal. ｜ 彼女は素晴らしい熱意を持って科学のキャリアを追求した。
`;